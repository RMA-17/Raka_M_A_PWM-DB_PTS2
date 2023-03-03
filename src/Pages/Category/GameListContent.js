/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import "../../App.css";

const GameListContent = () => {
  const { type } = useParams();

  const [gameList, setGameList] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);

  const getCategoryGames = async () => {
    setLoading(true);
    const res = await axios
      .get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        params: { category: type },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
      })
      .catch((e) => {
        setLoading(false);
        setSuccess(false);
      });
    setGameList(res.data);
    setLoading(false);
    setSuccess(true);
  };

  useEffect(() => {
    getCategoryGames();
  }, []);

  function truncateString(str, num) {
    if (num > str.length) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  }

  console.log(gameList);

  return (
    <section id="category-content">
      <Helmet>
        <title>{`MangGamez | Category: ${type}`}</title>
        <meta name="description" content={`List game ${type}`} />
      </Helmet>
      <h2 className="text-2xl font-bold gamer-header text-secondary-color">
        Explore {type} games
      </h2>
      <div className="flex flex-wrap py-12 gap-5 justify-center">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Grid
              height="100"
              width="100"
              color="#2f73ee"
              visible="true"
            />
          </div>
        ) : isSuccess ? (
          <>
            {gameList?.slice(0, 32).map((game) => (
              <div key={game.id} className="game-item">
                <div className="game-item-thumb-container">
                  <img
                    className="game-item-thumb"
                    src={game.thumbnail}
                    alt={game.title}
                  />
                  <Link
                    className="hidden absolute top-8 left-16 gamer-header cursor-pointer text-black rounded-lg py-3 px-4 bg-white hover:bg-brand-color hover:text-white hover:rounded-2xl transition-all ease-in-out btn_detail"
                    to={`/games/${game.id}`}
                  >
                    Details
                  </Link>
                </div>
                <div className="game-item-content">
                  <h2 className="text-base font-semibold gamer-header">
                    {game.title}
                  </h2>
                  <h2 className="text-sm text-gray-500">
                    Platform: {game.platform}
                  </h2>
                  <p className="text-xs text-black py-2">
                    {truncateString(game.short_description, 62)}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex h-screen justify-center items-center">
          <h1 className="text-4xl text-white font-semibold">Error fetching data</h1>
        </div>
        )}
      </div>
    </section>
  );
};

export default GameListContent;
