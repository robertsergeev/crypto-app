import React from "react";
import { useEffect, useState } from "react";
import CoinList from "../Components/CoinList";
import { useCoins } from "../hooks/useCoins";
import CoinFilter from "../Components/CoinFilter";
import { CoinService } from "../API/CoinService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../Components/UI/loader/Loader";

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [filter, setFilter] = useState({ query: "", sort: "" });
    const searchedAndFilteredCoins = useCoins(filter.sort, coins, filter.query);

    const [fetchCoins, isCoinsLoading, error] = useFetching(async () => {
        const response = await CoinService.getAll();
        setCoins([...coins, ...response]);
    });

    useEffect(() => {
        fetchCoins();
    }, []);

    return (
        <div className="App">
            <h1>Cryptocurrency Prices</h1>
            <CoinFilter filter={filter} setFilter={setFilter} />
            {isCoinsLoading ? (
                <Loader />
            ) : error ? (
                <div>error</div>
            ) : (
                <CoinList coins={searchedAndFilteredCoins} />
            )}
        </div>
    );
};

export default Coins;
