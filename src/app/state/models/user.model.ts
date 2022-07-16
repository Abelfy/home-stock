export interface User {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  location?: any;
  title?: any;
  description?: any;
  tags?: any;
  avatar?: any;
  language?: string;
  theme?: string;
  tfa_secret?: any;
  status?: string;
  role?: Role;
  token?: any;
  last_access?: Date;
  last_page?: string;
  provider?: string;
  external_identifier?: any;
  auth_data?: any;
  email_notifications?: boolean;
} 

export interface Role {
  name : string;
  id : string;
} // end interface Role

