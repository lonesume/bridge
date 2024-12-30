import aboutPic from "@/assets/images/about-pic.jpg";

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#242424]">
      <div className="max-w-3xl mx-auto my-8 p-10 bg-[rgba(30,30,30,0.95)] rounded-2xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-white text-3xl mb-8 text-center font-semibold">
          About
        </h1>

        <div className="flex flex-col gap-8 px-4">
          {/* Text Container */}
          <p className="text-white text-lg leading-relaxed">
            The app enables users to easily understand colloquial language
            through clear, accessible explanations.
          </p>

          {/* Image Container */}
          <div className="w-full overflow-hidden rounded-lg border border-white/10">
            <img
              src={aboutPic}
              alt="About"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
