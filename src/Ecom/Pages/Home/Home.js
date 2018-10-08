import React from "react";
import Slideshow from "./Slideshow";

const Home = () => {
  window.onscroll = () => {
    arrowScroll();
  };

  const arrowScroll = () => {
    if (window.location.pathname === "/") {
      if (document.documentElement.scrollTop > 200) {
        document.querySelector(".hero__arrow").style.transform = "scale(0)";
      } else {
        document.querySelector(".hero__arrow").style.transform = "scale(1)";
      }
    }
  };

  const scrollHandler = location => {
    const rect = document.querySelector(location).getBoundingClientRect();
    if (window.innerWidth >= 1000) {
      window.scrollTo({ top: rect.top - 130, behavior: "smooth" });
    } else {
      window.scrollTo({ top: rect.top - 109, behavior: "smooth" });
    }
  };

  // first wrapping div is a wrapper to allow jsx to have a parent, siblings not allowed
  return (
    <div>
      <section className="hero">
        <div className="hero__mask">
          <div className="text__background">
            <h1 className="hero__title">Canopy</h1>
            <p className="hero__desc">Let nature envelop you</p>
            <i
              onClick={() => scrollHandler(".content")}
              className="fas fa-angle-double-down hero__arrow"
            />
          </div>
        </div>
      </section>

      <main
        className="content"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 30px"
        }}
      >
        <section className="mission">
          <article>
            <h2 className="mission__title">Colorful Vibes</h2>
            <p className="mission__desc">
              In a world of ever increasing grey, we believe in bringing color
              and health back into our communities
            </p>
          </article>
          <article>
            <h2 className="mission__title">Exotic Foliage</h2>
            <p className="mission__desc">
              Choose from the world's rarest and most beautiful trees to give
              your home a more exotic or natural look.
            </p>
          </article>
        </section>

        <section className="featured">
          <Slideshow />
        </section>
      </main>
    </div>
  );
};

export default Home;
