const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/QJ8VQnd/natureyoga-1.png)",
      }}
    >
      <div className="container mx-auto px-4 md:px-32">
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to Weekend Fitness Club
            </h1>
            <p className="mb-5 text-lg">
              Yoga is the journey of the self, through the self, to the
              self.Inhale the future, exhale the past.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
