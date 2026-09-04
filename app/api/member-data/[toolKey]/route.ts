import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isMemberToolKey } from "@/lib/memberToolKeys";

// Sanity cap, not a measured limit — every tool's data is small (plain text
// and numbers, no embedded files/images), this just guards against a bad
// client sending something absurd.
const MAX_PAYLOAD_BYTES = 500_000;

type RouteParams = { params: Promise<{ toolKey: string }> };

export async function GET(_req: NextRequest, { params }: RouteParams) {
  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { toolKey } = await params;
  if (!isMemberToolKey(toolKey)) {
    return new NextResponse("Unknown tool key", { status: 400 });
  }

  const row = await prisma.memberToolData.findUnique({
    where: { userId_toolKey: { userId, toolKey } },
  });

  return NextResponse.json({
    data: row?.data ?? null,
    updatedAt: row?.updatedAt ?? null,
  });
}

export async function PUT(req: NextRequest, { params }: RouteParams) {
  const { userId } = await auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { toolKey } = await params;
  if (!isMemberToolKey(toolKey)) {
    return new NextResponse("Unknown tool key", { status: 400 });
  }

  const raw = await req.text();
  if (raw.length > MAX_PAYLOAD_BYTES) {
    return new NextResponse("Payload too large", { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return new NextResponse("Invalid JSON", { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("data" in body) ||
    typeof (body as { data: unknown }).data !== "object" ||
    (body as { data: unknown }).data === null
  ) {
    return new NextResponse("Body must be { data: <object> }", { status: 400 });
  }

  const data = (body as { data: object }).data;

  const row = await prisma.memberToolData.upsert({
    where: { userId_toolKey: { userId, toolKey } },
    create: { userId, toolKey, data },
    update: { data },
  });

  return NextResponse.json({ ok: true, updatedAt: row.updatedAt });
}
