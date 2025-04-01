import { type NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const { browser } = userAgent(request);

  // Check if browser is Safari
  const isSafari = browser.name === "Safari";

  // You can modify the response or add headers based on browser
  const response = NextResponse.next();
  response.headers.set("x-browser-type", isSafari ? "safari" : "other");

  return response;
}

// Configure which paths the middleware runs on
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
