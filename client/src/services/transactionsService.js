import api from "../hooks/use-api";

export default class TransactionsService {
    static async getBalance() {
        return api.get('/getBalance')
    }
}
