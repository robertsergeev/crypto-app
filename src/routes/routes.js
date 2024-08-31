import About from "../pages/About";
import CoinIdPage from "../pages/CoinIdPage";
import Coins from "../pages/Coins";
import Error from "../pages/Error";

export const privateRoutes = [
    { path: "/", element: <Coins /> },
    { path: "/coins", element: <Coins /> },
    { path: "/coins/:id", element: <CoinIdPage /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <Error /> },
];
