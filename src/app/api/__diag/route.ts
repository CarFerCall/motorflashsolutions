import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const keys = [
    'DATABASE_URI',
    'POSTGRES_URL',
    'DATABASE_URL',
    'PRISMA_DATABASE_URL',
    'PAYLOAD_SECRET',
    'NEXT_PUBLIC_SERVER_URL',
    'NODE_ENV',
    'VERCEL_ENV',
  ]
  const out: Record<string, string> = {}
  for (const k of keys) {
    const v = process.env[k]
    if (!v) {
      out[k] = '(missing)'
    } else if (k === 'PAYLOAD_SECRET') {
      out[k] = `set len=${v.length}`
    } else if (/URL|URI/.test(k)) {
      const m = v.match(/^([a-z+]+):\/\//i)
      out[k] = m ? `${m[1]}:// len=${v.length}` : `(no scheme) len=${v.length}`
    } else {
      out[k] = v
    }
  }
  return NextResponse.json(out)
}
