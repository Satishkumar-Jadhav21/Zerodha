import React from "react";
import { Link } from "react-router-dom";  

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="HeroPicture"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <Link to="https://zerodha-kite-flax.vercel.app/register" className="text-white text-decoration-none">
          Sign up Now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;