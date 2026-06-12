'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import { PuckRender } from './PuckRender'

interface Props {
  initialData: any
  serverURL: string
}

/**
 * Wrapper para el modo Live Preview. Escucha postMessage del admin y
 * re-renderiza al instante el JSON de Puck con cambios sin guardar.
 */
export function PageLivePreview({ initialData, serverURL }: Props) {
  const { data } = useLivePreview<any>({
    initialData,
    serverURL,
    depth: 1,
  })
  return <PuckRender data={data?.puckData} />
}
