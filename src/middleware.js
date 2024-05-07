import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
    let isWalletConnected = false;
    let haveAccount = true;

    // if (window) {
    //     isWalletConnected = localStorage.getItem("isWalletConnected");
    //     console.log("isWalletConnected:", isWalletConnected);
    // }

    if (isWalletConnected && haveAccount) {
        if (request.nextUrl.pathname == "/" || request.nextUrl.pathname == "/register") {
            console.log("redirecting to feeds isWalletConnected && haveAccount");
            return NextResponse.redirect("/feeds");
            
        } else {
            console.log("next isWalletConnected && haveAccount");
        return NextResponse.next();
        
        }
    }
    else if (isWalletConnected && !haveAccount) {
        if (request.nextUrl.pathname === "/register") {
            return NextResponse.next();
        } else {
            return NextResponse.redirect("/register");
        }
    }
    else if (!isWalletConnected) {
        if (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/register") {
            return NextResponse.next();
        } else {
            return NextResponse.redirect("/register");
        }
    }

//   } else if (request.nextUrl.pathname.startsWith("/register")) {
//     return NextResponse.json({ message: address });
//   } 
}
