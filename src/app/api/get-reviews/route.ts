import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function GET() {
  try {
    const cached = await redis.get("google-reviews");

    if (!cached) {
      return NextResponse.json({
        reviews: [],
        fetchedAt: null,
      });
    }

    return NextResponse.json(cached);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Error fetching cached reviews";

    console.error("❌ Failed to read from KV:", error);

    return NextResponse.json(
      {
        reviews: [],
        error: message,
      },
      { status: 500 }
    );
  }
}
