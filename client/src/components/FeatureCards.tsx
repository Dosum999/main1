import { ArrowRight } from "lucide-react";

interface FeatureCard {
  title: string;
  image: string;
  icon: string;
}

interface FeatureCardsProps {
  className?: string;
}

export function FeatureCards({ className }: FeatureCardsProps) {
  const features: FeatureCard[] = [
    {
      title: "Purpose-built for product development",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=336&h=320&fit=crop",
      icon: "🎯"
    },
    {
      title: "Designed to move fast",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=336&h=320&fit=crop",
      icon: "⚡"
    },
    {
      title: "Crafted to perfection",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=336&h=320&fit=crop",
      icon: "✨"
    }
  ];

  return (
    <div className={`flex flex-col lg:flex-row gap-8 items-center justify-center ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="relative group">
          {/* Blur background */}
          <div className="absolute inset-0 blur-sm opacity-30 pointer-events-none">
            <div className="bg-[#141516] rounded-3xl w-[336px] h-[360px] overflow-hidden">
              <div className="relative w-full h-[320px]">
                <div 
                  className="w-full h-full bg-gradient-to-b from-black/70 to-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 90%), url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Main card */}
          <div className="relative bg-[#141516] rounded-3xl w-[336px] h-[360px] overflow-hidden group-hover:transform group-hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-[320px]">
              <div 
                className="w-full h-full bg-gradient-to-b from-black/70 to-transparent"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 90%), url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Content overlay */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <h3 className="text-light-text text-lg font-semibold leading-7 max-w-[200px]">
                  {feature.title}
                </h3>
                <div className="w-10 h-10 rounded-full border-2 border-white/5 backdrop-blur-sm flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-light-text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}