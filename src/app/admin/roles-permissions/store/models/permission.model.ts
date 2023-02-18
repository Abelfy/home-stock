/**
 * Model Permission
 * 
 */
export type Permission = {
    id: number
    role: string | null
    action: string
    permissions: string | null
    validation: string | null
    presets: string | null
    fields: string | null
  }