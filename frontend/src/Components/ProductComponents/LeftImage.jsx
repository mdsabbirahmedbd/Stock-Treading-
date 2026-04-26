const appstore = "/images/appstoreBadge.svg";
const googleplay = "/images/googlePlayBadge.svg";
const LeftImage = ({ image, title, description }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img src={image} alt="" />
        </div>
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
          <div className="space-y-6 my-5">
            <h1 className="text-xl tracking-wide leading-relaxed text-gray-600">{description}</h1>
          </div>
        <div className="flex  gap-2">
          <a href="#">
            <img src={googleplay} alt="Get it on Google Play" className="h-9 w-auto" />
          </a>
          <a href="#">
            <img src={appstore}  alt="Download on the App Store" className="h-9 w-auto" />
          </a>
        </div>
        </div>


      </div>
    </section>
  );
};

export default LeftImage;
