import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import AppContextProvider from "./AppContext/AppContext";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <AppContextProvider>
            <Header />
            <Main />
            <Footer />
        </ AppContextProvider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
