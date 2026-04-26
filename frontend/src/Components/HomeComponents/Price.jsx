const zerodollar = "/images/zerodollar.svg";
const twodollar = "/images/twodollar.svg";
const Price = () => {
  return (
          <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unbeatable pricing
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              See pricing →
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <div className="flex flex-col items-center text-center w-28">
              <img
                className="w-20 h-20 object-contain"
                src={zerodollar}
                alt="zero"
              />
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                Free account opening
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-28">
              <img
                className="w-20 h-20 object-contain"
                src={zerodollar}
                alt="zero"
              />
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="flex flex-col items-center text-center w-28">
              <img
                className="w-20 h-20 object-contain"
                src={twodollar}
                alt="twenty"
              />
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Price