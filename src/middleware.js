"use srver";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  console.log("middleware");
  if (cookies().has("isWalletConnected") && cookies().has("isAccount")) {
    console.log("1ST STATEMENT TRUE ////////////////////");

    if (
      cookies().get("isWalletConnected").value == "true" &&
      cookies().get("isAccount").value == "true"
    ) {
      console.log("1.1 ST STATEMENT TRUE ////////////////////");
      if (
        request.nextUrl.pathname == "/" ||
        request.nextUrl.pathname == "/register"
      ) {
        console.log("1.1.1 ST STATEMENT TRUE ////////////////////");
        return NextResponse.redirect(new URL("/feeds", request.url));
      } else {
        console.log("1.1.2 ST STATEMENT TRUE ////////////////////");
        return NextResponse.next();
      }}
      else if (cookies().get("isWalletConnected").value == "true" &&
      cookies().get("isAccount").value == "false") {
      console.log("1.2 ST STATEMENT TRUE ////////////////////");
      if (request.nextUrl.pathname === "/register") {
        console.log("1.2.1 ST STATEMENT TRUE ////////////////////");
        return NextResponse.next();
      } else {
        console.log("1.2.2 ST STATEMENT TRUE ////////////////////");
        return NextResponse.redirect(new URL("/register", request.url));
      }
    } else {
      console.log("1.3 ST STATEMENT TRUE ////////////////////");
      if (
        request.nextUrl.pathname === "/" ||
        request.nextUrl.pathname === "/register"
      ) {
        console.log("1.3.1 ST STATEMENT TRUE ////////////////////");
        return NextResponse.next();
      } else {
        console.log("1.3.2 ST STATEMENT TRUE ////////////////////");
        return NextResponse.redirect(new URL("/register", request.url));
      }
    }
  } else {
    console.log("2 ST STATEMENT TRUE ////////////////////");
    if (
      request.nextUrl.pathname == "/" ||
      request.nextUrl.pathname == "/register"
    ) {
      console.log("2.1 ST STATEMENT TRUE ////////////////////");
      return NextResponse.next();
    } else {
      console.log("2.2 ST STATEMENT TRUE ////////////////////");
      return NextResponse.redirect(new URL("/register", request.url));
    }
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

