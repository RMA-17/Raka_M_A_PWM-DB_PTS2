import React from 'react'
import '../../App.css'
import WebLogo from '../../assets/mang-games-logo.png'

const About = () => {
  return (
    <section id="about">
      <div className="flex rounded-xl w-full h-64 px-4 about-card">
         <div className="flex w-2/4 justify-center items-center">
            <img className="w-80" src={WebLogo} alt="" />
         </div>
         <div className="flex w-3/4 h-full py-10 px-12 text-white flex-col">
            <h2 className="text-3xl font-bold">More fun, more games</h2>
            <p className="py-4 font-semibold">We have various of game that exists in this century, feel free to explore and add them into your collection</p>
            <div className="flex items-center">
            <button className="w-36 gamer-header cursor-pointer text-brand-color rounded-lg py-3 bg-white hover:bg-brand-color hover:text-white hover:rounded-2xl transition-all ease-in-out">EXPLORE NOW</button>
            </div>
         </div>
      </div>
    </section>
  )
}

export default About