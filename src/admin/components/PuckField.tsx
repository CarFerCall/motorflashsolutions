'use client'

import { useEffect, useState } from 'react'
import { useField } from '@payloadcms/ui'
import { Puck, type Data } from '@measured/puck'
import '@measured/puck/puck.css'
import { puckConfig } from '@/puck/config'

const EMPTY_DATA: Data = { content: [], root: { props: {} } as any }

/**
 * Editor visual Puck embebido en el documento Página de Payload.
 *
 * Reemplaza la edición JSON manual del campo `puckData` por un canvas
 * con drag & drop libre, paleta lateral de componentes y panel de
 * propiedades a la derecha. Cualquier cambio se persiste en el campo
 * (gestionado por Payload con su autosave/guardar).
 */
export default function PuckField() {
  const { value, setValue } = useField<Data>({ path: 'puckData' })
  const initial = (value && typeof value === 'object' && 'content' in (value as any)
    ? (value as Data)
    : EMPTY_DATA) as Data

  // Estado local para que el editor sea reactivo a cambios externos
  // (por ejemplo al cargar el doc) pero no resetee mientras editas.
  const [data, setData] = useState<Data>(initial)

  useEffect(() => {
    setData(initial)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      style={{
        height: 'calc(100vh - 220px)',
        minHeight: 600,
        margin: '24px -24px 0',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 12,
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      <Puck
        config={puckConfig as any}
        data={data}
        onChange={(next) => {
          setData(next as Data)
          setValue(next as Data)
        }}
        overrides={{
          // Quitamos el header de Puck (Publish, etc) — el guardado va por Payload.
          header: () => null as any,
        }}
      />
    </div>
  )
}
