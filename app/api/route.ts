import { NextResponse } from "next/server";

const Foods = ["Burger", "Pizza"] as const;

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(Foods);
}
