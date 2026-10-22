import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { clearSessionCookie, destroySession, SESSION_COOKIE } from '@/lib/auth'
import { env } from '@/lib/env'

// Plain form POST from the header's "Log out" button.
export async function POST() {
  const jar = await cookies()
  await destroySession(jar.get(SESSION_COOKIE)?.value)
  await clearSessionCookie()
  return NextResponse.redirect(`${env.siteUrl}/`, 303)
}
