
const ecosystem = "/images/ecosystem.png";
const features = [
    {
      title: "Customer-first always",
      desc: "That's why 1.6+ crore customers trust Zerodha with ~₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.",
    },
    {
      title: "No spam or gimmicks",
      desc: 'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
    },
    {
      title: "The Zerodha universe",
      desc: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      title: "Do better with money",
      desc: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

const Trust = () => {
  return (
         <section>
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* Left: features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-10">
                Trust with confidence
              </h2>
              <div className="space-y-8">
                {features.map((f) => (
                  <div key={f.title}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-10">
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Explore our products →
                </a>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Try Kite demo →
                </a>
              </div>
            </div>

            {/* Right: ecosystem */}
            <div>
              <img src={ecosystem} alt="" />
            </div>
          </div>
        </section>
      </section>
  )
}

export default Trust