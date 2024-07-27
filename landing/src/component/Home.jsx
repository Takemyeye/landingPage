import React from "react";
import { Header } from "./header";
import "./styles/home.css"
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { Innovation } from "./components/innovation";
import { Experience } from "./components/expirience";

const Home = () => {
    return (
        <main>
            <Header/>
            <Main/>
            <Innovation/>
            <Experience/>
            <Footer/>
        </main>
    )
}

export default Home;