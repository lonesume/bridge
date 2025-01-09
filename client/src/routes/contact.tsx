import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";

type ContactFormData = { name: string; email: string; message: string };

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    console.log(data);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.json();
    console.log(json);
  };

  const { user } = useUser();
  const fullName = user?.fullName || user?.username || "";
  const userEmail = user?.emailAddresses[0].emailAddress || "";

  return (
    <div className="pt-20 min-h-screen bg-[#242424]">
      <div className="max-w-3xl mx-auto my-8 p-10 bg-[rgba(30,30,30,0.95)] rounded-2xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-white text-3xl mb-8 text-center font-semibold">
          Contact Us
        </h1>

        <div className="flex flex-col gap-8 px-4">
          <p className="text-white text-lg leading-relaxed">
            Questions? Feel free to reach out.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium ml-1">
                Name
              </label>
              <input
                defaultValue={fullName}
                {...register("name", { required: true })}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white 
                         placeholder-white/30 focus:outline-none focus:border-[#646cff] 
                         focus:bg-white/8 transition-all duration-300"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm ml-1">
                  This field is required
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium ml-1">
                Email
              </label>
              <input
                defaultValue={userEmail}
                {...register("email", { required: true })}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white 
                         placeholder-white/30 focus:outline-none focus:border-[#646cff] 
                         focus:bg-white/8 transition-all duration-300"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm ml-1">
                  This field is required
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium ml-1">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="w-full min-h-[200px] p-4 bg-white/5 border border-white/10 rounded-lg 
                         text-white placeholder-white/30 focus:outline-none focus:border-[#646cff] 
                         focus:bg-white/8 transition-all duration-300 resize-y"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm ml-1">
                  This field is required
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-[#646cff] border border-[#646cff] 
                       text-white text-sm font-medium cursor-pointer transition-all duration-300
                       hover:bg-[#535bf2] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
