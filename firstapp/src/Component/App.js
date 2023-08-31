import React from "react";
import Header from './Header'
import Footer from "./Footer";
const App = () => {
    return (
        <div>
            <Header/>
            <h1>Hello Mr.Zubair</h1>
            <h2>Hello Mr.Sohail</h2>
            <Footer month="Aug" year="2023"/>
        </div>
    )
};

export default App;