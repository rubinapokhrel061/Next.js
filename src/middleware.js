// import { NextResponse } from "next/server";
// export async function middleware(request) {
//   console.log("hello");
//   //   //jati pani page xa teslaii redirect garera "/view/photos" path ma pathauna vanyo tara "/view/photos" yo path ma nii yesailaii redirect garyoo loop banyoo
//   //   return NextResponse.redirect(new URL("/view/photos", request.url));

//   //   if (request.nextUrl.pathname !== "/view/photos") {
//   //   return NextResponse.redirect(new URL("/view/photos", request.url));
//   //   }

//   return NextResponse.rewrite(new URL("/view/photos", request.url));
// }

// export const config = {
//   matcher: "/view/:path*",
// };

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ["en", "ne"];

let defaultLocale = "en";
// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  let headers = { "accept-language": "en-US,en;q=0.5" };
  let languages = new Negotiator({ headers }).languages();
  const finalLocale = match(languages, locales, defaultLocale);
  return finalLocale;
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
