import { Link } from "react-router";

const zerodollar = "/images/zerodollar.svg";
const twodollar = "/images/twodollar.svg";
const Pricing = () => {
  const pricingData = [
    {
      title: "Free equity delivery",
      desc: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
      img: zerodollar,
    },
    {

      title: "Intraday and F&O trades",
      desc: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades.",
      img: twodollar,
    },
    {

      title: "Free direct MF",
      desc: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
      img: zerodollar,
    },
  ];

  return (
    <section className=" py-20 px-6 ">
      
      {/* Heading */}
      <div className="text-center my-10 mb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
          Charges
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          List of all charges and taxes
        </p>
      </div>

      {/* Cards */}
      <div className="my-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {pricingData.map((item, i) => (
          <div key={i} className="flex flex-col items-center">

            {/* Image */}
            <img
              src={item.img} 
              alt="pricing"
              className="h-28 mb-6 object-contain"
            />

            {/* Title */}
            <h4 className="text-lg font-medium text-gray-800 mb-3">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

       <div className="text-center my-9">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Invest in everything
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <Link to='/singup'
            className="btn bg-blue-600 hover:bg-black text-white border-none px-8 text-base rounded-md"
          >
            Sign up for free
          </Link>
        </div>

    </section>
  );
};

export default Pricing;