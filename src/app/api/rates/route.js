import db from "@/app/data/db.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(db.rates);
}
