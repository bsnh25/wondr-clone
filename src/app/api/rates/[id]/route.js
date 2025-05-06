import db from "@/app/data/db.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { id } = params;
  const rate = db.rates.find((rate) => rate.id === parseInt(id));

  if (!rate) {
    return NextResponse.json({ message: "Rates Not Found" }, { status: 404 });
  }
  return NextResponse.json({ message: "success", data: rate });
}
