"use client";

import Image from "next/image";
import "./carousel.scss";

const Carousel = () => {
  return (
    <div className="bg-dark">
      <div className="d-flex justify-content-center text-white">
        <p className="subtitulo">Ropa De Temporada</p>
      </div>
      <div className="carousel-container bg-dark">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-image-container">
                <Image
                  src="/playera/playera1.jpg"
                  alt="Streetwear"
                  width={400}
                  height={500}
                  className="d-block"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Elevate Your Streetwear Game</h5>
                <p>Style that speaks to your personality.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-image-container">
                <Image
                  src="/playera/playera1.jpg"
                  alt="Contemporary Casual"
                  width={400}
                  height={500}
                  className="d-block"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Contemporary Casual</h5>
                <p>Effortlessly cool for every occasion.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-image-container">
                <Image
                  src="/playera/playera1.jpg"
                  alt="Elegant Wear"
                  width={400}
                  height={500}
                  className="d-block"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Timeless Elegance</h5>
                <p>Redefine sophistication.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
