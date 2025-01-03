import { NextResponse } from "next/server";
export async function middleware(request) {
  console.log("hello");
  //   //jati pani page xa teslaii redirect garera "/view/photos" path ma pathauna vanyo tara "/view/photos" yo path ma nii yesailaii redirect garyoo loop banyoo
  //   return NextResponse.redirect(new URL("/view/photos", request.url));

  //   if (request.nextUrl.pathname !== "/view/photos") {
  //   return NextResponse.redirect(new URL("/view/photos", request.url));
  //   }

  return NextResponse.rewrite(new URL("/view/photos", request.url));
}

export const config = {
  matcher: "/view/:path*",
};
