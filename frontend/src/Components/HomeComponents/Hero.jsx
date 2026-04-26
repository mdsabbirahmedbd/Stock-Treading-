const homeHero = "/images/homeHero.png";

const Hero = () => {
  return (
       <section className=" py-20 px-4">
        <img src={homeHero} alt="" />

        {/* Text */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Invest in everything
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <a
            href="#"
            className="btn bg-blue-600 hover:bg-black text-white border-none px-8 text-base rounded-md"
          >
            Sign up for free
          </a>
        </div>
      </section>
  )
}

export default Hero