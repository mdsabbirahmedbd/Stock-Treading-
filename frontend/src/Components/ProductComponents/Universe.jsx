const Ditto = '/images/dittoLogo.png'
const Smallcase = '/images/smallcaseLogo.png'
const Streak = '/images/streakLogo.png'
const Zerodha = '/images/zerodhaFundhouse.png'
const Sensibull = '/images/sensibullLogo.svg'
const Tijori = '/images/tijiro.svg'


const Universe = () => {
  const items = [
    {
      name: "Zerodha Fund House",
      img: Zerodha,
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      name: "Sensibull",
      img: Sensibull,
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points.",
    },
    {
      name: "Tijori",
      img: Tijori,
      desc: "Investment research platform that offers detailed insights on stocks, sectors, and more.",
    },
    {
      name: "Streak",
      img: Streak,
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      name: "Smallcase",
      img: Smallcase,
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks.",
    },
    {
      name: "Ditto",
      img: Ditto,
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <section className=" py-20 px-6">
      
      {/* Top Text */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-gray-600 text-sm mb-6">
          Want to know more about our technology stack? Check out the{" "}
          <span className="text-blue-600 cursor-pointer">Zerodha.tech</span> blog.
        </p>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
          The Zerodha Universe
        </h2>

        <p className="text-gray-600 text-sm md:text-base">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
        
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            
            {/* Image */}
            <img
              src={item.img} // 👉 এখানে তোমার image দিবা
              alt={item.name}
              className="h-12 mb-4 object-contain"
            />

            {/* Title */}
            <h3 className="font-medium text-gray-800 mb-2">
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* Button */}
      <div className="text-center mt-16">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Sign up for free
        </button>
      </div>

    </section>
  );
};

export default Universe;