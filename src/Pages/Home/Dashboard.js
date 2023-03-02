import React from "react";
import "../../App.css";

const Dashboard = () => {
  return (
    <section id="home">
      <div className="py-16"></div>
      <div className="image-container py-20 px-10 flex justify-center flex-col">
        <h2 className="text-white text-7xl gamer-header font-bold">Explore Games,</h2>
        <h2 className="text-white text-5xl gamer-header font-medium">and add them into your collection</h2>
        <p className="text-white py-10 text-lg">
          <span className="font-bold text-secondary-color">MangGamez</span> offers tons of latest games that can be added into your collection <br />
          explore now, and we will give <span className="font-bold">20% DISCOUNT only for today!</span>
        </p>
        <button className="w-36 gamer-header cursor-pointer text-brand-color rounded-lg py-3 px-4 bg-white hover:bg-brand-color hover:text-white hover:rounded-2xl transition-all ease-in-out">EXPLORE NOW</button>
      </div>
    </section>
  );
};

export default Dashboard;
