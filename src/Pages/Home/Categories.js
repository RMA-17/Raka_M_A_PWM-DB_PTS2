/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faAtom,
  faDragon,
  faEarth,
  faGhost,
  faGun,
  faHandFist,
  faMap,
  faSkull,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Categories = () => {
  return (
    <section id="category">
      <div className="flex m-5 justify-between items-center">
        <h2 className="text-2xl font-medium gamer-header text-secondary-color">
          Browse game by Category
        </h2>
        <a
          href="/category/"
          className="py-2 px-4 text-white gamer-header hover:bg-brand-color text-sm hover:text-white hover:rounded-full transition-all ease-in-out"
        >
          View All
        </a>
      </div>
      <div className="category-container">
        <Link className="category-item shooter-item" to={`/category/shooter`}>
          <FontAwesomeIcon icon={faGun} />
          <h2>Shooter</h2>
        </Link>
        <Link className="category-item moba-item" to={`/category/moba`}>
          <FontAwesomeIcon icon={faMap} />
          <h2>MOBA</h2>
        </Link>
        <Link className="category-item fighting-item" to={`/category/fighting`}>
          <FontAwesomeIcon icon={faHandFist} />
          <h2>Fighting</h2>
        </Link>
        <Link
          className="category-item battleroyale-item"
          to={`/category/battle-royale`}
        >
          <FontAwesomeIcon icon={faSkull} />
          <h2>Battle Royale</h2>
        </Link>
        <Link
          className="category-item openworld-item"
          to={`/category/open-world`}
        >
          <FontAwesomeIcon icon={faEarth} />
          <h2>Open World</h2>
        </Link>
        <Link className="category-item horror-item" to={`/category/horror`}>
          <FontAwesomeIcon icon={faGhost} />
          <h2>Horror</h2>
        </Link>
        <Link className="category-item fantasy-item" to={`/category/fantasy`}>
          <FontAwesomeIcon icon={faDragon} />
          <h2>Fantasy</h2>
        </Link>
        <Link className="category-item scifi-item" to={`/category/sci-fi`}>
          <FontAwesomeIcon icon={faAtom} />
          <h2>Sci-Fi</h2>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
