import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx55K6HGBfQGrT6-mZUPaYn0RZkpQ3VCqlDWRsWYCFXvFYsOgArlxkwX9kUtlps4u7J/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Google Script Proxy Error:", error);
    return NextResponse.json(
      { error: "Failed to submit data" },
      { status: 500 }
    );
  }
}
