import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const idToken: string | undefined = req.cookies['__session']

  if (!idToken) return NextResponse.rewrite('/lp')

  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/verify`, {
      method: 'POST',
      body: JSON.stringify({
        idToken,
      }),
    })
    return res
  } catch {
    // 認証されていないときは暗黙的に LP を表示
    return NextResponse.rewrite('/lp')
  }
}
