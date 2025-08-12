import { CheckCircle, Circle, AlertTriangle } from "lucide-react";

interface ProjectManagementProps {
  className?: string;
}

export function ProjectManagement({ className }: ProjectManagementProps) {
  return (
    <div className={`max-w-6xl mx-auto ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-3.5 h-2 bg-[#68cc58] rounded-full"></div>
        <span className="text-[#d0d6e0] text-sm font-semibold tracking-tight">
          Project and long-term planning
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-light-text text-5xl font-semibold leading-tight tracking-tight">
            Set the product direction
          </h2>
          
          <p className="text-muted-text text-lg leading-relaxed max-w-md">
            Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Linear's visual planning tools.
          </p>

          {/* Project Overview Card */}
          <div className="relative">
            {/* Blur background */}
            <div className="absolute inset-0 blur-sm opacity-50 pointer-events-none">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <h3 className="text-light-text text-lg font-semibold">
                    Project Overview
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[#68cc58]" />
                        <span className="text-[#68cc58] text-sm font-semibold">On Track</span>
                      </div>
                      <p className="text-light-text text-sm mt-2">
                        We are ready to launch next Thursday
                      </p>
                      <span className="text-[#62666d] text-xs mt-1 block">Sep 8</span>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 opacity-50">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-4 h-4 text-[#f2994a]" />
                        <span className="text-[#f2994a] text-sm font-semibold">At Risk</span>
                      </div>
                      <p className="text-light-text text-sm mt-2">
                        Progress slowed down last week because...
                      </p>
                      <span className="text-[#62666d] text-xs mt-1 block">Oct 27</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-light-text text-lg font-semibold">
                  Project Overview
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#68cc58]" />
                      <span className="text-[#68cc58] text-sm font-semibold">On Track</span>
                    </div>
                    <p className="text-light-text text-sm mt-2">
                      We are ready to launch next Thursday
                    </p>
                    <span className="text-[#62666d] text-xs mt-1 block">Sep 8</span>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 opacity-50">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-4 h-4 text-[#f2994a]" />
                      <span className="text-[#f2994a] text-sm font-semibold">At Risk</span>
                    </div>
                    <p className="text-light-text text-sm mt-2">
                      Progress slowed down last week because...
                    </p>
                    <span className="text-[#62666d] text-xs mt-1 block">Oct 27</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Roadmap Visual */}
        <div className="relative">
          {/* Blur background */}
          <div className="absolute inset-0 blur-sm opacity-30 pointer-events-none">
            <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#68cc58] rounded-full"></div>
                  <span className="text-light-text font-semibold">Collaborative Documents</span>
                </div>
                <div className="flex items-center gap-4 opacity-60">
                  <Circle className="w-3 h-3 text-[#232326]" />
                  <span className="text-[#62666d] font-semibold">Inline Comments</span>
                </div>
                <div className="flex items-center gap-4 opacity-60">
                  <Circle className="w-3 h-3 text-[#232326]" />
                  <span className="text-[#62666d] font-semibold">Text to Issue Commands</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main visual */}
          <div className="relative bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <h3 className="text-light-text text-xl font-semibold leading-8">
                Ideate and specify what to build next
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-6 bg-[#68cc58] rounded-full"></div>
                  <span className="text-light-text font-semibold">Collaborative Documents</span>
                </div>
                <div className="flex items-center gap-4 opacity-60">
                  <div className="w-1 h-6 bg-[#232326] rounded-full"></div>
                  <span className="text-[#62666d] font-semibold">Inline Comments</span>
                </div>
                <div className="flex items-center gap-4 opacity-60">
                  <div className="w-1 h-6 bg-[#232326] rounded-full"></div>
                  <span className="text-[#62666d] font-semibold">Text to Issue Commands</span>
                </div>
              </div>

              {/* Document Preview */}
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#223620] rounded-lg flex items-center justify-center">
                    <span className="text-xs">📝</span>
                  </div>
                  <div className="bg-[#68cc58]/20 border border-[#2c901c] rounded px-3 py-1 text-xs">
                    <span className="text-light-text font-semibold">Collaborate on</span>
                    <span className="bg-[#2c901c] text-white px-1 rounded text-xs ml-1">Zoe</span>
                  </div>
                  <span className="text-light-text font-semibold">Ideas</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-muted-text">Write down product ideas and work together on</p>
                  <p className="text-muted-text">feature specs in realtime multiplayer project</p>
                  <div className="flex items-center gap-2">
                    <div className="w-0.5 h-5 bg-[#5e6ad2] rounded-full"></div>
                    <div className="bg-[#5e6ad2] text-white px-2 py-0.5 rounded text-xs">Quinn</div>
                  </div>
                  <p className="text-[#62666d]">documents. Add style and structure with</p>
                  <p className="text-muted-text">rich text formatting options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}