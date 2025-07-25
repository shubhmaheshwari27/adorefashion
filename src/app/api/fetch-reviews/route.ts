import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const PLACE_ID = process.env.PLACE_ID;
const API_KEY = process.env.PLACES_API_KEY;

export async function GET(req: Request) {
  // Optional: Secure with CRON_SECRET
  const authHeader = req.headers.get("Authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    const reviews = data.result?.reviews || [];

    await redis.set("google-reviews", {
      reviews,
      fetchedAt: new Date().toISOString(),
    });

    console.log("✅ Reviews stored in Upstash KV");
    return NextResponse.json({ success: true, reviews });
  } catch (error: unknown) {
  const message =
    error instanceof Error ? error.message : "Unknown error";

  console.error("❌ Failed to fetch reviews:", error);

  return NextResponse.json(
    {
      success: false,
      error: message,
    },
    { status: 500 }
  );
}}


// import { Redis } from "@upstash/redis";
// import { NextResponse } from "next/server";

// const redis = new Redis({
//   url: process.env.KV_REST_API_URL!,
//   token: process.env.KV_REST_API_TOKEN!,
// });

// const PLACE_ID = process.env.PLACE_ID;
// const API_KEY = process.env.PLACES_API_KEY;

// export async function GET() {
//   try {
//     const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
//     const res = await fetch(url);
//     const data = await res.json();

//     const reviews = data.result?.reviews || [];

//     await redis.set("google-reviews", {
//       reviews,
//       fetchedAt: new Date().toISOString(),
//     });

//     console.log("✅ Reviews stored in Upstash KV");
//     return NextResponse.json({ success: true, reviews });
//   } catch (error: any) {
//     console.error("❌ Failed to fetch reviews:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: error?.message || "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }



// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// const PLACE_ID = process.env.PLACE_ID;
// const API_KEY = process.env.PLACES_API_KEY;

// export async function GET() {
//   try {
//     const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
//     const res = await fetch(url);
//     const data = await res.json();

//     const reviews = data.result?.reviews || [];

//     // Save to local cache
//     const filePath = path.join(process.cwd(), "data", "reviews.json");
//     fs.writeFileSync(
//       filePath,
//       JSON.stringify({ reviews, fetchedAt: new Date() }, null, 2)
//     );

//     return NextResponse.json({ success: true, reviews });
//   } catch (error: unknown) {
//     console.error("Failed to fetch reviews:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to fetch Google reviews",
//         error: error instanceof Error ? error.message : "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }
