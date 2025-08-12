import { ChevronRight } from "lucide-react";

interface CTAButtonsProps {
  onStartBuilding?: () => void;
  onLearnMore?: () => void;
}

export function CTAButtons({ onStartBuilding, onLearnMore }: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* Primary CTA */}
      <div className="relative">
        <div className="absolute inset-0 blur-sm opacity-50 pointer-events-none">
          <button className="bg-gray-200 text-dark-bg px-6 py-3 rounded-xl font-semibold text-sm shadow-lg">
            Start Building
          </button>
        </div>
        <button 
          onClick={onStartBuilding}
          className="relative bg-gray-200 text-dark-bg px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:bg-white transition-all duration-200"
        >
          Start Building
        </button>
      </div>
      
      {/* Secondary CTA */}
      <div className="relative">
        <div className="absolute inset-0 blur-sm opacity-50 pointer-events-none">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm">
            <span className="gradient-text">
              Introducing Linear for Agents
            </span>
            <ChevronRight className="w-4 h-4 text-light-text" />
          </button>
        </div>
        <button 
          onClick={onLearnMore}
          className="relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-800/20 transition-all duration-200"
        >
          <span className="gradient-text">
            Introducing Linear for Agents
          </span>
          <ChevronRight className="w-4 h-4 text-light-text" />
        </button>
      </div>
    </div>
  );
}
