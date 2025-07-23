// src/lib/getCachedReviews.server.ts
import fs from 'fs';
import path from 'path';

export type Review = {
  author_name: string;
  profile_photo_url?: string;
  text: string;
  rating?: number;
};

export function getCachedReviews(): Review[] {
  try {
    const filePath = path.join(process.cwd(), 'data', 'reviews.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data.reviews || [];
  } catch {
    return [];
  }
}
