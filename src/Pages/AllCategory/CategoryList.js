import React from "react";
import { Link } from "react-router-dom";
import {
  faGun,
  faMap,
  faHandFist,
  faSkull,
  faEarth,
  faGhost,
  faDragon,
  faAtom,
  faHelicopter,
  faSpaceShuttle,
  faSoccerBall,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";

const CategoryList = () => {
  return (
    <>
    <Helmet>
      <title>MangGamez | Category List</title>
      <meta name="description" content="This is page of category list of this website" />
    </Helmet>
      <section id="category-list">
        <h2 className="text-2xl font-bold gamer-header text-secondary-color">
          Explore game categories
        </h2>
        <div className="category-container mt-5">
          <Link className="category-item shooter-item" to={`/category/shooter`}>
            <FontAwesomeIcon icon={faGun} />
            <h2>Shooter</h2>
          </Link>
          <Link className="category-item moba-item" to={`/category/moba`}>
            <FontAwesomeIcon icon={faMap} />
            <h2>MOBA</h2>
          </Link>
          <Link
            className="category-item fighting-item"
            to={`/category/fighting`}
          >
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
          <Link className="category-item military-item" to={`/category/military`}>
            <FontAwesomeIcon icon={faHelicopter} />
            <h2>Military</h2>
          </Link>
          <Link className="category-item space-item" to={`/category/space`}>
            <FontAwesomeIcon icon={faSpaceShuttle} />
            <h2>Space</h2>
          </Link>
          <Link className="category-item superhero-item" to={`/category/superhero`}>
            <FontAwesomeIcon icon={faSuperpowers} />
            <h2>Superheroes</h2>
          </Link>
          <Link className="category-item sports-item" to={`/category/sports`}>
            <FontAwesomeIcon icon={faSoccerBall} />
            <h2>Sports</h2>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CategoryList;
