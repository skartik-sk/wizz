"use srver";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  console.log("middleware");
  if (cookies().has("isWalletConnected")) {
    console.log("1ST STATEMENT TRUE ////////////////////");
     console.log(
      "isWalletConnected value:",
      cookies().get("isWalletConnected").value
    );
    if (cookies().get("isWalletConnected").value == "true") {
      console.log("1.1 ST STATEMENT TRUE ////////////////////");
      if (request.nextUrl.pathname == "/") {
        console.log("1.1.1 ST STATEMENT TRUE ////////////////////");
        return NextResponse.redirect(new URL("/feeds", request.url));
      } else {
        console.log("1.1.2 ST STATEMENT TRUE ////////////////////");
        return NextResponse.next();
      }
    } else {
      console.log(
        "isWalletConnected value:",
        cookies().get("isWalletConnected").value
      );
      console.log("1.2 ST STATEMENT TRUE ////////////////////");
      if (request.nextUrl.pathname === "/") {
        console.log("1.2.1 ST STATEMENT TRUE ////////////////////");
        return NextResponse.next();
      } else {
        console.log("1.2.2 ST STATEMENT TRUE ////////////////////");
        return NextResponse.request(new URL("/", request.url));
      }
    }
  } else {
    console.log("2 ST STATEMENT TRUE ////////////////////");
    cookies.set("isWalletConnected", false);
    if (request.nextUrl.pathname == "/") {
        console.log("2.1 ST STATEMENT TRUE ////////////////////");
      return NextResponse.next();
    } else {
        console.log("2.2 ST STATEMENT TRUE ////////////////////");
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ['/', '/test', '/feeds',],
};

// if (cookies().has("isWalletConnected")) {
//     isWalletConnected = cookies().get("isWalletConnected");
//     console.log("isWalletConnected value:", isWalletConnected);

//     if (isWalletConnected == true && haveAccount == true) {
//       console.log("1ST STATEMENT TRUE ////////////////////");
//       if (
//         request.nextUrl.pathname == "/" ||
//         request.nextUrl.pathname == "/register"
//       ) {
//         console.log("redirecting to feeds isWalletConnected && haveAccount");
//         return NextResponse.redirect(new URL("/feeds", request.url));
//       } else {
//         console.log("next isWalletConnected && haveAccount");
//         return NextResponse.next();
//       }
//     } else if (isWalletConnected == true && haveAccount == false) {
//       console.log("2ND STATEMENT TRUE ////////////////////");
//       if (request.nextUrl.pathname == "/register") {
//         return NextResponse.next();
//       } else {
//         return NextResponse.redirect("/register");
//       }
//     } else if (isWalletConnected == false) {
//       console.log("3RD STATEMENT TRUE ////////////////////");
//       if (
//         request.nextUrl.pathname == "/" ||
//         request.nextUrl.pathname == "/register"
//       ) {
//         return NextResponse.next();
//       } else {
//         return NextResponse.redirect(new URL("/test", request.url));
//       }
//     }
//   } else {
//     console.log("4TH STATEMENT TRUE ////////////////////");
//     console.log("no cookies");
//     if (
//       request.nextUrl.pathname == "/" ||
//       request.nextUrl.pathname == "/register"
//     ) {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(new URL("/test", request.url));
//     }
//   }
