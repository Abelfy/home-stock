import { Permission } from "src/app/admin/roles-permissions/store/models/permission.model"

/**
 * Model User
 * 
 */
export type User = {
  id: number
  first_name: string | null
  last_name: string | null
  email: string | null
  salt: string | null
  hash: string
  hashedRt: string | null
  location: string | null
  title: string | null
  description: string | null
  tags: string | null
  avatar: string | null
  language: string | null
  theme: string | null
  tfa_secret: string | null
  status: string
  role: Role | null
  token: string | null
  last_access: Date | null
  last_page: string | null
  provider: string
  external_identifier: string | null
  auth_data: String | null
  email_notifications: boolean | null
}
export interface Role {
  name : string;
  id : string;
  permissions : Permission[];
} // end interface Role

