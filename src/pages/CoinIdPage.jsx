import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { CoinService } from "../API/CoinService";
import Loader from "../Components/UI/loader/Loader";

const CoinIdPage = () => {
    const params = useParams();
    const [coin, setCoin] = useState([]);

    const [fetchCoin, isCoinLoading, coinLoadingError] = useFetching(
        async (id) => {
            const response = await CoinService.getCoinById(id);
            setCoin(response.data[0]);
        }
    );

    useEffect(() => {
        fetchCoin(params.id);
    }, []);

    return (
        <div className="coin-page">
            {coinLoadingError ? (
                <div>Error Loading this coin</div>
            ) : (
                <div>
                    {isCoinLoading ? (
                        <Loader />
                    ) : (
                        <div>
                            <h1>{coin.symbol}</h1>
                            <p>{coin["price_usd"]}$</p>
                            <p>1h change: {coin["percent_change_1h"]}%</p>
                            <p>24h change: {coin["percent_change_24h"]}%</p>
                            <p>7d change: {coin["percent_change_7d"]}%</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CoinIdPage;
