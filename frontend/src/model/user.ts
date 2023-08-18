export interface User {
  username: string,
  password: string,
  email: string,
  terms: boolean,
}

export interface LoginUser {
  username: string,
  password: string,
}

export type LoginReponse = {
  access_token: string
}