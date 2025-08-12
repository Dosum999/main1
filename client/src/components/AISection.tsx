import { Bot, Sparkles } from "lucide-react";

interface AISectionProps {
  className?: string;
}

export function AISection({ className }: AISectionProps) {
  const agents = [
    { name: "Sentry", avatar: "🔍", tag: "App" },
    { name: "Devin", avatar: "💻", tag: "App" },
    { name: "ChatPRD", avatar: "📋", tag: "App" },
    { name: "Leela", avatar: "🤖", tag: "App" }
  ];

  return (
    <div className={`max-w-6xl mx-auto ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-3.5 h-2 bg-[#02b8cc] rounded-full"></div>
        <span className="text-[#d0d6e0] text-sm font-semibold tracking-tight">
          Artificial Intelligence
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-light-text text-5xl font-semibold leading-tight tracking-tight">
            AI that works where you work
          </h2>
          
          <p className="text-muted-text text-lg leading-relaxed max-w-md">
            Linear for Agents. Choose from a variety of AI agents and start delegating work from code generation to other technical tasks.
          </p>
        </div>

        {/* Right Content - AI Interface */}
        <div className="relative">
          {/* Blur background */}
          <div className="absolute inset-0 blur-sm opacity-30 pointer-events-none">
            <div className="bg-gradient-to-br from-white/10 to-white/0 border border-[#3e3e44] rounded-lg p-6 backdrop-blur-sm">
              <div className="border-b border-[#23252a] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-muted-text text-lg">Assign to</span>
                  <div className="w-0.5 h-5 bg-[#5e6ad2] rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                {agents.map((agent, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#343434] to-[#2d2d2d] rounded-md p-3 flex items-center gap-3 shadow-lg">
                    <div className="w-6 h-5 bg-gray-300 rounded-md overflow-hidden flex items-center justify-center text-xs">
                      {agent.avatar}
                    </div>
                    <span className="text-light-text font-semibold">{agent.name}</span>
                    <div className="ml-auto bg-[#1c1c1f] px-2 py-1 rounded text-xs">
                      <span className="text-muted-text font-semibold">{agent.tag}</span>
                    </div>
                    <Bot className="w-5 h-5 text-light-text" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main interface */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/0 border border-[#3e3e44] rounded-lg p-6 backdrop-blur-sm">
            <div className="border-b border-[#23252a] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-muted-text text-lg">Assign to</span>
                <div className="w-0.5 h-5 bg-[#5e6ad2] rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              {agents.map((agent, index) => (
                <div key={index} className="bg-gradient-to-r from-[#343434] to-[#2d2d2d] rounded-md p-3 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="w-6 h-5 bg-gray-300 rounded-md overflow-hidden flex items-center justify-center text-xs">
                    {agent.avatar}
                  </div>
                  <span className="text-light-text font-semibold">{agent.name}</span>
                  <div className="ml-auto bg-[#1c1c1f] px-2 py-1 rounded text-xs">
                    <span className="text-muted-text font-semibold">{agent.tag}</span>
                  </div>
                  <Bot className="w-5 h-5 text-light-text" />
                </div>
              ))}
            </div>

            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}