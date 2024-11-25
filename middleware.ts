import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("sb-access-token")?.value; // Verifica o cookie de token
	const pathname = request.nextUrl.pathname;

	if (token && pathname === "/login") {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (token && pathname === "/register") {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (token && pathname === "/") {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	// Se tentar acessar uma rota protegida (dashboard) sem estar logado
	if (pathname.startsWith("/dashboard") && !token) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	// Continua normalmente
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
