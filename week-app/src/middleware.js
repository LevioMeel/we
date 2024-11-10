import { NextResponse } from "next/server";
import { parse } from "cookie";

export async function middleware(request) {
  const cookies = parse(request.headers.get("cookie") || "");
  const accessToken = cookies["accessToken"];

  let data = await fetch("http://localhost:5000/api/auth/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ accessToken }),
  });

  let user = await data.json();

  if (data.status == 200) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Указываем, для каких маршрутов применять middleware
export const config = {
  matcher: ["/"],
};
