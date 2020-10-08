import HttpClient from "../http-client.service"


export const OWNER_LOCALSTORAGE_KEYS = {
    "token": "user_token",
    "userInfo": "user_info",
    "location_keys":"location_info"
}


export class UserService extends HttpClient {

    constructor() {
        super("users")
    }

    isLoggedIn() {
        console.log(localStorage.getItem(OWNER_LOCALSTORAGE_KEYS.token))
        return (localStorage.getItem(OWNER_LOCALSTORAGE_KEYS.token)) ? true : false
    }

    getToken() {
        return localStorage.getItem(OWNER_LOCALSTORAGE_KEYS.token)
    }

    addToken(token) {
        localStorage.setItem(OWNER_LOCALSTORAGE_KEYS.token, token)
    }

    adddUserInfo(userInfo) {
        const { token, ...user } = userInfo
        this.addToken(token)
        localStorage.setItem(OWNER_LOCALSTORAGE_KEYS.userInfo, JSON.stringify(user))
    }

    logout() {
        localStorage.removeItem(OWNER_LOCALSTORAGE_KEYS.token)
    }


    async login(credentials) {
        const urlPath = `${this.resourceUrl}/login`
        return await this.postRequest(urlPath, credentials)
    }

    async register(formData) {
        const urlPath = `${this.resourceUrl}/register`
        return await this.postRequest(urlPath, formData)
    }

}

export const userService = new UserService()
