
const founder = '/images/founder.png'

const About = () => {
  return (
   <div className=" text-gray-700">

      {/* ===== Top About Content ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-medium mb-16 text-gray-800">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h2>

        {/* Divider */}
        <div className="border-t mb-16"></div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 text-sm leading-7">
          
          {/* Left */}
          <div className="space-y-4">
            <p>
              We kick-started operations on the 15th of August, 2010 with the goal
              of breaking all barriers that traders and investors face in India
              in terms of cost, support, and technology.
            </p>

            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <p>
              We run a number of popular open online educational and community
              initiatives to empower retail traders and investors.
            </p>

            <p>
              Our fintech fund and incubator has invested in several startups
              with the goal of growing capital markets.
            </p>

            <p>
              We are always building something new. Catch up on updates on our
              blog and learn more about our philosophies.
            </p>
          </div>

        </div>
      </section>

      {/* ===== People Section ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Title */}
        <h2 className="text-center text-2xl font-medium mb-16 text-gray-800">
          People
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="flex flex-col items-center text-center">
            <img
              src={founder} 
              alt="Founder"
              className="w-56 h-56 object-cover rounded-full mb-6"
            />
            <h3 className="text-lg font-medium">Sabbir ahmed</h3>
            <p className="text-sm text-gray-500">Founder, CEO</p>
          </div>

          {/* Content */}
          <div className="text-sm leading-7 space-y-4">
            <p>
              Founded in 2010 to overcome the hurdles faced in traditional
              trading systems, our platform has grown to transform how people
              invest.
            </p>

            <p>
              Today, we are changing the landscape of the broking industry with
              modern technology and simple pricing.
            </p>

            <p>
              We focus on building products that are easy to use and accessible
              to everyone.
            </p>

            <p>
              Connect with us to learn more about our journey and vision.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;