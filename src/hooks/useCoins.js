import { useMemo } from "react";

export const useSortedCoins = (sort, coins) => {
    const sortedCoins = useMemo(() => {
        if (sort) {
            return [...coins].sort((a, b) => {
                const valueA = a[sort];
                const valueB = b[sort];

                if (sort === "name") {
                    return valueA.localeCompare(valueB);
                }

                if (sort === "priceLowest") {
                    return a["price_usd"] - b["price_usd"];
                }

                if (sort === "priceHighest") {
                    return b["price_usd"] - a["price_usd"];
                }

                return 0;
            });
        }

        return coins;
    }, [sort, coins]);

    return sortedCoins;
};

export const useCoins = (sort, coins, query) => {
    const sortedCoins = useSortedCoins(sort, coins);

    const searchedAndFilteredCoins = useMemo(() => {
        return [...sortedCoins].filter((coin) =>
            coin.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, sortedCoins]);

    return searchedAndFilteredCoins;
};
