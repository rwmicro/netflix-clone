import { NextRequest, NextResponse } from "next/server";
import MobileDetect from "mobile-detect";

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile();

  const url = req.nextUrl.clone();

  if (isMobile) {
    url.pathname = "/mobile";
    return NextResponse.rewrite(url);
  }

  if (url.pathname === "/") {
    const profileCookie = req.cookies.get('profile');
    if (profileCookie) {
      return NextResponse.redirect(new URL('/home', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/movies", "/series"],
};
