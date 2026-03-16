import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 1. Se sei in locale (localhost), non bloccare nulla
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next()
  }

  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'
  const url = request.nextUrl.clone()

  // 2. Se la modalità Coming Soon è attiva e non sei già sulla pagina /coming-soon
  if (isComingSoon && url.pathname !== '/coming-soon') {
    url.pathname = '/coming-soon'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Configura su quali pagine agisce il middleware (escludi file statici e api)
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}