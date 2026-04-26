const education = "/images/education.svg";

const Education = () => {
  return (
           <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
            <img src={education} alt="" />
        </div>
         

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Free and open market education
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-gray-500 text-sm leading-relaxed mb-2">
                Varsity, the largest online stock market education book in the world covering
                everything from the basics to advanced trading.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
                Varsity →
              </a>
            </div>
            <div>
              <p className="text-gray-500 text-sm leading-relaxed mb-2">
                TradingQ&A, the most active trading and investment community in India for all
                your market related queries.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
                TradingQ&A →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education