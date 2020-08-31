import React from "react";

import AppContextProvider from "./../AppContext/AppContext";
import Header from "./../Header/Header";
import Main from "./../Main/Main";
import Footer from "./../Footer/Footer";

const App = () => {
    return (
        <AppContextProvider>
            <Header />
            <Main />
            <Footer />
        </ AppContextProvider>
    )
}

export default App;
