import React from "react";
import Header from "../../Components/Header";
import About from "./About";
import Categories from "./Categories";
import Dashboard from "./Dashboard";
import Footer from "../../Components/Footer";
import "../../App.css";
import { Helmet } from "react-helmet";

const PageHome = () => {
  return (
    <>
      <Helmet>
        <title>MangGamez | Explore latest games!</title>
        <meta
          name="description"
          content="MangGamez is a website for searching latest game, feel free to explore and add them to your collection"
        />
      </Helmet>
      <Header />
      <Dashboard />
      <Categories />
      <About />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PageHome;
