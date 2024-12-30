// import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#242424]">
      <div className="max-w-3xl mx-auto my-8 p-10 bg-[rgba(30,30,30,0.95)] rounded-2xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-white text-3xl mb-8 text-center font-semibold">
          Private Beta
        </h1>

        <div className="flex flex-col gap-8 px-4">
          <p className="text-white text-lg leading-relaxed">
            Our private beta is currently closed. However, if you'd like to
            support the development of this project, you can make a donation
            below. Every contribution helps us improve and expand our language
            accessibility tools.
          </p>

          <form
            action="/api/create-checkout-session"
            method="POST"
            className="w-full"
          >
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-[#646cff] border border-[#646cff] 
                       text-white text-sm font-medium cursor-pointer transition-all duration-300
                       hover:bg-[#535bf2] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Support the Project
            </button>
          </form>

          <p className="text-white/50 text-sm text-center">
            Payments are securely processed through Stripe
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
