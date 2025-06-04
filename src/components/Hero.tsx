const Hero = () => {
  return (
    <section className=" text-white py-24 px-6 leading-0.5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          👋 Welcome to <span className="text-pink-400">Coding Blogs</span>
        </h1>
        <p className="text-sm md:text-md text-gray-300 mb-8">
          Get a curated dose of coding insights, real-world experiences,
          <br className="hidden sm:inline" />
          and roadmap wisdom to fuel your developer journey.
        </p>
      </div>
    </section>
  );
};
export default Hero;
