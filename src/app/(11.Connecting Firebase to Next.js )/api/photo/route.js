import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ message: "success", status: 200 });
}

export async function POST(request) {
  return NextResponse.json({
    message: "successfully added",
    status: 201,
    data: obj,
  });
}
 