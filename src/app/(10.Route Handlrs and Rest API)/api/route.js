import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ message: "success", status: 200 });
}

export async function POST(request) {
  const res = await request.json();
  if (request.method === "POST") {
    const title = res.title;
    const des = res.des;
    const obj = { title, des };
    return NextResponse.json({
      message: "successfully added",
      status: 201,
      data: obj,
    });
  } else {
    return NextResponse.json({ message: "something went wrong" });
  }
}
 