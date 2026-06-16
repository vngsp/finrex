import { type NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	const token = req.cookies.get('finrex.auth')?.value;
	const { pathname } = req.nextUrl;

	if (token && pathname === '/login') {
		return NextResponse.redirect(new URL('/goals', req.url));
	}

	/*if (!token && pathname !== '/login') {
		return NextResponse.redirect(new URL('/login', req.url));
	}*/

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)).*)',
	],
};
