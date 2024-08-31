import axios from "axios";

export class CoinService {
    static async getAll() {
        const response = await axios.get(
            "https://api.coinlore.net/api/tickers/"
        );
        const coins = response.data.data;
        return coins;
    }

    static async getCoinById(id) {
        const response = await axios.get(
            `https://api.coinlore.net/api/ticker/`,
            {
                params: {
                    id: id,
                },
            }
        );

        return response;
    }
}
