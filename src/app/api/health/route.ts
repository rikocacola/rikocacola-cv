import { NextResponse } from "next/server";

/**
 * Liveness probe for the container healthcheck and any orchestrator in front
 * of it. Deliberately reports nothing about the app's internals.
 */
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    { status: "ok" },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
}
