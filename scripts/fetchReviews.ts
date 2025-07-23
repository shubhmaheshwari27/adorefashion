import fs from "fs";
import path from "path";
import "dotenv/config";

const PLACE_ID = process.env.PLACE_ID;
const API_KEY = process.env.PLACES_API_KEY;

async function fetchReviews() {
  if (!PLACE_ID || !API_KEY) {
    console.error("❌ PLACE_ID or PLACES_API_KEY missing in env");
    return;
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const reviews = data.result?.reviews ?? [];

  const filePath = path.join("data", "reviews.json");
  fs.writeFileSync(filePath, JSON.stringify({ reviews, fetchedAt: new Date() }, null, 2));

  console.log("✅ Reviews fetched and written to data/reviews.json");
}

fetchReviews();
