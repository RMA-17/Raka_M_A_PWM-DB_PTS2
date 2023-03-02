/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
import "../../App.css";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSignOut } from "@fortawesome/free-solid-svg-icons";

const DetailContent = () => {
  const [game, setGame] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { gameId } = useParams();

  const getGameDetail = async () => {
    setLoading(true);
    const res = await axios
      .get("https://free-to-play-games-database.p.rapidapi.com/api/game", {
        params: {
          id: gameId,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
      })
      .catch((e) => {
        setSuccess(false);
        setLoading(false);
      });
    setGame(res.data);
    setLoading(false);
    setSuccess(true);
  };

  useEffect(() => {
    getGameDetail();
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${game.title} | MangGamez`}</title>
        <meta name="description" content={game.short_description} />
      </Helmet>
      {isLoading ? (
        <>
          <div className="flex justify-center items-center bg-black">
            <CirclesWithBar
              height="100"
              width="100"
              color="#2f73ee"
              visible="true"
            />
          </div>
        </>
      ) : isSuccess ? (
        <>
          <section
            id="detail-content"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)), url(${game.thumbnail})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div className="w-1/4 p-4 block">
              <div className="h-64 pt-2 flex flex-col">
                <img
                  className="h-48 rounded-xl"
                  src={game.thumbnail}
                  alt="Game Thumbnail"
                />
                <div className="flex flex-col text-white p-2">
                  <h1 className="text-4xl font-semibold gamer-header">
                    {game.title}
                  </h1>
                  <h3 className="pt-2 text-base font-semibold gamer-header">
                    Genre:{" "}
                    <Link
                      to={`/category/${game.genre.toLowerCase()}`}
                      className="font-bold text-secondary-color"
                    >
                      {game.genre}
                    </Link>
                  </h3>
                  <h3 className="pt-2 text-base font-semibold gamer-header">
                    Publisher:{" "}
                    <span className="font-medium">{game.publisher}</span>
                  </h3>
                  <h3 className="pt-2 text-base font-semibold gamer-header">
                    Developer:{" "}
                    <span className="font-medium">{game.developer}</span>
                  </h3>
                </div>
                <button className="text-xl text-center gamer-header font-semibold px-1 py-3 bg-brand-color hover:bg-secondary-color text-white transition-all ease-in-out hover:rounded-xl rounded-md">
                  <FontAwesomeIcon className="mx-2" icon={faSignOut} />
                  <Link to={game.game_url} target="_blank">
                    Go to Official Site
                  </Link>
                </button>
                <button className="mt-2 text-xl text-center gamer-header font-semibold px-1 py-3 bg-white hover:bg-secondary-color text-brand-color transition-all ease-in-out hover:text-white hover:rounded-xl rounded-md">
                  <FontAwesomeIcon className="mx-2" icon={faHeart} />
                  Add to Favorite
                </button>
              </div>
            </div>
            <div className="w-3/4 flex pb-10 px-8 flex-col">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 my-5"
              >
                {game.screenshots?.map((screenshotItem, index) => (
                  <SwiperSlide className="rounded-xl">
                    <img
                      className="rounded-xl"
                      src={screenshotItem.image}
                      alt={`Screenshot #${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-2"
              >
                {game.screenshots?.map((screenshotItem, index) => (
                  <SwiperSlide className="cursor-pointer rounded-xl">
                    <img
                      className="hover:rounded-xl transition-all ease-in-out"
                      src={screenshotItem.image}
                      alt={`Screenshot #${index}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h2 className="text-white text-2xl font-bold pt-12 gamer-header">
                About {game.title}
              </h2>
              <p className="text-white leading-relaxed pt-5 text-justify text-md">
                {game.description}
              </p>
              <h2 className="text-white text-2xl font-bold pt-12 gamer-header">
                System Requirements
              </h2>
              <div className="text-white pt-5">
                <h4 className="font-semibold">OS: <span className="font-bold">{`${game.minimum_system_requirements.os}`}</span></h4>
                <h4 className="font-semibold">Processor: <span className="font-bold">{`${game.minimum_system_requirements.processor}`}</span></h4>
                <h4 className="font-semibold">Memory: <span className="font-bold">{`${game.minimum_system_requirements.memory}`}</span></h4>
                <h4 className="font-semibold">Graphics: <span className="font-bold">{`${game.minimum_system_requirements.graphics}`}</span> </h4>
                <h4 className="font-semibold">Storage: <span className="font-bold">{`${game.minimum_system_requirements.storage}`}</span></h4>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-4xl font-semibold">Error fetching data</h1>
        </div>
      )}
    </>
  );
};

export default DetailContent;
