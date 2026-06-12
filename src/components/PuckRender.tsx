'use client'

import { Render } from '@measured/puck'
import { puckConfig } from '@/puck/config'

interface Props {
  data: any
}

export function PuckRender({ data }: Props) {
  if (!data || !data.content) return null
  return <Render config={puckConfig as any} data={data} />
}
