import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('finrex.auth')?.value;
  if (!token && request.nextUrl.pathname !== '/login') {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token && request.nextUrl.pathname === '/login') {
    const homeUrl = new URL('/insights', request.url);
    return NextResponse.redirect(homeUrl);
  }
  console.log('token', token);

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
