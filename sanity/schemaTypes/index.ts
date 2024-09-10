import { type SchemaTypeDefinition } from 'sanity'
import { siteConfigType } from './site-config'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteConfigType],
}
