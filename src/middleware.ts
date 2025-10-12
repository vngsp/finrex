import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('finrex.auth')?.value;

  const isAuthPage = request.nextUrl.pathname === '/login';

  if (token && isAuthPage) {
    const homeUrl = new URL('/insights', request.url);
    return NextResponse.redirect(homeUrl);
  }

  if (!token && !isAuthPage) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.url);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
