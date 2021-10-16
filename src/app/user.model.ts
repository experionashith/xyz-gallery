export interface User {
    userid : string,
    password: string,
    username: string
}

export interface LoginResponse {
    loginSuccess: boolean,
     message: string
}