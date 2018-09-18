import React from "react";
import Slideshow from "./Slideshow";

const Home = () => {
  // first wrapping div is a wrapper to allow jsx to have a parent, siblings not allowed
  return (
    <div>
      <section className="hero">
        <div className="text__background">
          <h1 className="hero__title">Canopy</h1>
          <p className="hero__desc">Let nature envelop you</p>
        </div>
      </section>

      <main
        className="content"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 30px"
        }}
      >
        <section className="mission">
          <h2 className="mission__title">Natural Vibes</h2>
          <p className="mission__desc">
            In a world of ever increasing grey, we believe in bringing color and
            health back into our communities
          </p>
        </section>

        <section className="featured">
          <Slideshow />
        </section>
      </main>
    </div>
  );
};

export default Home;
