"use srver";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  let isWalletConnected;
  let haveAccount = true;

  if (cookies().has("isWalletConnected")) {
    isWalletConnected = cookies().get("isWalletConnected");
    console.log("isWalletConnected value:", isWalletConnected);

    if (isWalletConnected == true && haveAccount == true) {
      if (
        request.nextUrl.pathname == "/" ||
        request.nextUrl.pathname == "/register"
      ) {
        console.log("redirecting to feeds isWalletConnected && haveAccount");
        return NextResponse.redirect(new URL("/feeds", request.url));
      } else {
        console.log("next isWalletConnected && haveAccount");
        return NextResponse.next();
      }
    } else if (isWalletConnected == true && haveAccount == false) {
      if (request.nextUrl.pathname == "/register") {
        return NextResponse.next();
      } else {
        return NextResponse.redirect("/register");
      }
    } else if (isWalletConnected == false) {
      if (
        request.nextUrl.pathname == "/" ||
        request.nextUrl.pathname == "/register"
      ) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/test", request.url));
      }
    }
  } else {
    console.log("no cookies");
    if (request.nextUrl.pathname == "/" || request.nextUrl.pathname == "/register") {
      return NextResponse.next();
    } else {      
      return NextResponse.redirect(new URL("/test", request.url));
    }
    
  }
  
}
