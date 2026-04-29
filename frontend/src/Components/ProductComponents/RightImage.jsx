

const RightImage = ({image,title,description}) => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
          <div className="space-y-6 my-5">
            <h1 className="text-xl tracking-wide leading-relaxed text-gray-600">{description}</h1>
          </div>
        </div>

        
        <div>
          <img src={image} alt="" />
        </div>


      </div>
    </section>
  )
}

export default RightImage