import api from "../hooks/use-http";

export default class AuthService {
    static async login(email, password) {
        return api.post('/login', {email, password})
    }

    static async logout() {
        return api.post('/logout')
    }

    static async registration(email, password) {
        return api.post('/registration', {email, password})
    }
}