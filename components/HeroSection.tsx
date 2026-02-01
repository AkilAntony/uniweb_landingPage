"use client";


export default function Hero({backgroundImage} : {backgroundImage : string}) {
  console.log(backgroundImage)
  return (
    <div
      className="min-h-screen bg-cover "
      style={ backgroundImage
      ? { backgroundImage: `url(${backgroundImage})` }
      : {}}
    >
      <div className="max-w-7xl h-screen items-center mx-auto px-4 sm:px-6  py-28 lg:px-8">
        {/* Main Heading */}
        <div className="h-full  flex flex-col items-center  justify-center">
          <h1 className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-bold  mb-6  leading-tight ">
            Web Design & Development in Kuwait
          </h1>
          <span className="block text-center max-w-5xl mx-auto">
            Uniweb IT Solutions is a premier web design company in Kuwait, known
            for delivering high-quality digital solutions tailored to each
            client's unique needs. We offer a complete range of services,
            including web design, website development, e-commerce solutions,
            mobile app development, web hosting, digital marketing, and SEO in
            Kuwait. As a leading web design company in Kuwait, Uniweb IT
            Solutions focuses on personalized strategies, carefully crafting
            every project to align with our clients goals, brand identity, and
            long-term business vision.{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
