import { NextRequest, NextResponse } from 'next/server';
import { Languages } from '@/app/[lang]/dictionaries';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const q = request.nextUrl.search;
    const pathnameIsMissingLanguages = Languages.every(
        (language) => !Boolean(pathname.startsWith(`/${language}/`) || pathname === `/${language}`),
    );

    if (pathnameIsMissingLanguages) {
        const language = request.cookies.get('app-lang')?.value || 'fa';
        const response = NextResponse.redirect(new URL(`/${language}${pathname === '/' ? '' : pathname}${q}`, request.url), 301);
        response.cookies.set('app-lang', language);
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next).*)"],
};
