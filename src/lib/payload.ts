import 'server-only'
import { getPayload as getPayloadInstance } from 'payload'
import config from '@payload-config'

/**
 * Helper para coger una instancia de Payload desde Server Components / Server Actions.
 */
export async function getPayloadClient() {
  return getPayloadInstance({ config })
}
