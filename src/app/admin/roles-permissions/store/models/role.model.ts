/**
 * Model Role
 * 
 */
export type Role = {
    id: number
    name: string
    icon: string
    description: string | null
    ip_access: string | null
    enforce_tfa: boolean
    admin_access: boolean
    app_access: boolean
  }