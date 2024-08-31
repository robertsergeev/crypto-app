import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const CoinItem = ({ id, price, name, rank, symbol }) => {
    const navigate = useNavigate();

    return (
        <li className="coin">
            <div className="coin__id">{rank}</div>
            <h2 className="coin__title">
                <span>{name}</span>{" "}
                <span className="coin__symbol">({symbol})</span>
            </h2>
            <p className="coin__price">{price}$</p>
            <div className="coin__btns">
                <MyButton onClick={() => navigate(`/coins/${id}`)}>
                    More
                </MyButton>
            </div>
        </li>
    );
};

export default CoinItem;
