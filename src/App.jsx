import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { privateRoutes } from "./routes/routes";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <main className="main">
                <Routes>
                    {privateRoutes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    ))}
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
