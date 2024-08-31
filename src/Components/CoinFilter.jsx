import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const CoinFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
                type="text"
                placeholder="Search"
            />

            <MySelect
                value={filter.sort}
                defaultValue="Sort By"
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                options={[
                    {
                        value: "rank",
                        name: "Rank",
                    },
                    {
                        value: "name",
                        name: "Name",
                    },
                    {
                        value: "priceLowest",
                        name: "Price (Lowest)",
                    },
                    {
                        value: "priceHighest",
                        name: "Price (Highest)",
                    },
                ]}
            />
        </div>
    );
};

export default CoinFilter;
