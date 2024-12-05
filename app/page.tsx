import Banner from "./components/Banner";
import Image from "next/image";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div>
      <Banner />
      <Carousel />
      {/* Categories Section */}
      {/* <section className="categories-section my-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="category-card">
              <img
                src="/playera/playera1.jpg"
                className="img-fluid"
                alt="Streetwear"
              />
              <div className="overlay">
                <h5>Streetwear</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="category-card">
              <img
                src="/images/contemporary.jpg"
                className="img-fluid"
                alt="Contemporary"
              />
              <div className="overlay">
                <h5>Contemporary</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="category-card">
              <img
                src="/images/elegant.jpg"
                className="img-fluid"
                alt="Elegant Wear"
              />
              <div className="overlay">
                <h5>Elegant Wear</h5>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Brand Mission Section */}
      <section className="mission-section text-center bg-light p-5 rounded">
        <h2>Our Mission</h2>
        <p className="mt-3">
          To bring quality, service, attitude, style, and fashion to men’s
          wardrobes around the globe.
        </p>
      </section>
    </div>
  );
}
