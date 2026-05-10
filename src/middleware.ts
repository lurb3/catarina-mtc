import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Skip if:
  // - Local development (localhost)
  // - Already on homepage
  // - Requesting static files (_next/)
  const isLocal = request.headers.get("host")?.includes("localhost");
  const isHomePage = request.nextUrl.pathname === "/";
  const isStatic = request.nextUrl.pathname.startsWith("/_next/");
  const isStudio = request.nextUrl.pathname.startsWith("/studio");

  if (isLocal || isHomePage || isStatic || isStudio) {
    return NextResponse.next();
  }

  // Redirect all other routes to homepage (construction page)
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
