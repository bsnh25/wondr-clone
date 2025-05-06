import db from "@/app/data/db.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { slug } = await params;
  const event = db.events.find((event) => event.slug === slug);
  console.log(slug, "sluggg");

  if (!event) {
    return NextResponse.json({ message: "Rates Not Found" }, { status: 404 });
  }
  console.log(event, "eventtt");
  return NextResponse.json({ message: "success", data: event });
}
