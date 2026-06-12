'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import { BlockRenderer } from './blocks/BlockRenderer'

interface Props {
  initialData: any
  serverURL: string
}

/**
 * Cuando la página se carga dentro del iframe de Payload Live Preview,
 * este wrapper escucha los `postMessage` que llegan desde el admin con
 * los datos sin guardar y re-renderiza los bloques en vivo. Permite que
 * arrastres, edites campos y veas el resultado al instante sin guardar.
 */
export function PageLivePreview({ initialData, serverURL }: Props) {
  const { data } = useLivePreview<any>({
    initialData,
    serverURL,
    depth: 1,
  })
  const blocks = (data?.blocks ?? []) as Array<{ blockType: string; [k: string]: any }>
  return <BlockRenderer blocks={blocks} />
}
