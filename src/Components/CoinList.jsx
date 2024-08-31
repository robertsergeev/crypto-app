import React from "react";
import CoinItem from "./CoinItem";

const CoinList = ({ coins }) => {
    return (
        <ul className="list">
            <li className="coin-header">
                <div className="coin-header__id">Rank</div>
                <div className="coin-header__title">Name</div>
                <div className="coin-header__price">Price</div>
                <div className="coin-header__info">More</div>
            </li>

            {coins.map((coin) => (
                <CoinItem
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    price={coin.price_usd}
                    rank={coin.rank}
                    symbol={coin.symbol}
                />
            ))}
        </ul>
    );
};

export default CoinList;
