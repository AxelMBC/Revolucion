const AboutPage = () => {
  return (
    <div className="container my-5">
      <section className="about-us bg-light p-5 rounded">
        <h1 className="mb-4 text-center">About Us</h1>
        <p>
          At Men&Apos;s Style Hub, we pride ourselves on curating the finest
          collection of men’s clothing. Whether you’re looking for cutting-edge
          streetwear, contemporary casual outfits, or elegant formal wear, we
          have something for everyone.
        </p>
        <p>
          Our mission is to redefine men’s fashion by offering premium quality,
          exclusive brands, and unparalleled style.
        </p>
        s
      </section>
      <section className="mt-5 text-center">
        <h2 className="mb-4">Our Values</h2>
        <div className="row">
          <div className="col-md-4">
            <h5>Quality</h5>
            <p>
              We partner with top brands to ensure the highest quality
              standards.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Style</h5>
            <p>Stay ahead of trends with our modern and timeless designs.</p>
          </div>
          <div className="col-md-4">
            <h5>Exclusivity</h5>
            <p>
              Discover unique collections that set you apart from the crowd.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
