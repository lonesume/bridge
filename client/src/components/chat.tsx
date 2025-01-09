import { useState } from "react";

const FLASK_URL = "http://localhost:8080";

const Chat = () => {
  const [content, setContent] = useState("");
  const [role, setRole] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onPing = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${FLASK_URL}/api/ping`);
      console.log("res:", response);
    } catch (e) {
      alert(e);
    }
    setIsLoading(false);
  };

  const submitData = async () => {
    setIsLoading(true);

    if (!content || !role) {
      alert("Please fill in both content and role.");
      setIsLoading(false);
      return;
    }

    const data = { content, role };

    try {
      const response = await fetch(`${FLASK_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("Success:", data);
      setResponse(responseData.message);
      typeResponseGradually(responseData.message || "No message returned");
    } catch (e) {
      console.error("Error:", e);
      alert("There was an error submitting the data.");
    }

    setIsLoading(false);
  };

  function typeResponseGradually(message: string) {
    setResponse("");
    let index = -1;
    const speed = 50;

    function typeChar() {
      if (index < message.length) {
        setResponse((prev) => prev + message.charAt(index));
        index++;
        setTimeout(typeChar, speed);
      }
    }

    typeChar();
  }

  return (
    <div className="pt-20 min-h-screen bg-[#242424]">
      <div className="max-w-3xl mx-auto my-8 p-10 bg-[rgba(30,30,30,0.95)] rounded-2xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-white text-3xl mb-8 text-center font-semibold">
          AI Chat Interface
        </h1>

        <div className="flex flex-col gap-8 px-4">
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium ml-1">
              Content
            </label>
            <input
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white 
                       placeholder-white/30 focus:outline-none focus:border-[#646cff] 
                       focus:bg-white/8 transition-all duration-300"
              type="text"
              placeholder="Type your message here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium ml-1">Role</label>
            <input
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white 
                       placeholder-white/30 focus:outline-none focus:border-[#646cff] 
                       focus:bg-white/8 transition-all duration-300"
              type="text"
              placeholder="e.g., Helpful Assistant, Teacher, Expert..."
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="flex gap-4 mt-4 md:flex-row flex-col">
            <button
              className="flex-1 py-3.5 px-6 border border-white/10 rounded-lg bg-white/5 
                       text-white text-sm font-medium cursor-pointer transition-all duration-300
                       hover:bg-white/10 hover:border-[#646cff] disabled:opacity-50 
                       disabled:cursor-not-allowed"
              onClick={onPing}
              disabled={isLoading}
            >
              {isLoading ? "Pinging..." : "Ping"}
            </button>

            <button
              className="flex-1 py-3.5 px-6 rounded-lg bg-[#646cff] border border-[#646cff] 
                       text-white text-sm font-medium cursor-pointer transition-all duration-300
                       hover:bg-[#535bf2] disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={submitData}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-white text-sm font-medium ml-1">
              Response
            </label>
            <textarea
              className="w-full min-h-[200px] p-4 bg-white/5 border border-white/10 rounded-lg 
                       text-white placeholder-white/30 focus:outline-none focus:border-[#646cff] 
                       focus:bg-white/8 transition-all duration-300 resize-y"
              readOnly
              value={response}
              placeholder="AI response will appear here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
