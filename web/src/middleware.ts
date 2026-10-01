import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    // Gunakan fungsi bawaan node untuk dekode base64
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');

    // Kredensial rahasia untuk Admin
    if (user === 'pengurus' && pwd === 'rahasia123') {
      return NextResponse.next();
    }
  }
  
  // Jika auth gagal atau tidak ada header auth
  return new NextResponse('Akses Ditolak: Anda bukan pengurus masjid.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Admin Masjid At Taubah"',
    },
  });
}

// Middleware hanya berjalan untuk path /admin dan turunannya
export const config = {
  matcher: ['/admin/:path*'],
};
