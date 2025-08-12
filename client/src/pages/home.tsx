import { BlurredText } from "@/components/BlurredText";
import { CTAButtons } from "@/components/CTAButtons";
import { CompanyLogos } from "@/components/CompanyLogos";

export default function Home() {
  const handleStartBuilding = () => {
    console.log('Start Building clicked - Navigate to signup or dashboard');
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked - Navigate to agents feature page');
  };

  const words = [
    "Linear", "Is", "A", "Purpose-Built", "Tool", "For", "Planning", "And", "Building", "Products"
  ];

  return (
    <div className="min-h-screen w-full bg-dark-bg">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-0">
        {/* Main Heading */}
        <div className="flex flex-col items-center max-w-4xl mx-auto mb-16">
          {/* Main heading with blur effects */}
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 mb-12">
            {words.map((word, index) => (
              <BlurredText key={index} text={word} />
            ))}
          </div>
          
          {/* Sub Heading */}
          <div className="relative mb-12">
            <div className="absolute inset-0 blur-sm opacity-50 pointer-events-none">
              <p className="hero-subheading text-secondary-text text-center max-w-md">
                Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
              </p>
            </div>
            <p className="relative hero-subheading text-secondary-text text-center max-w-md">
              Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <CTAButtons 
            onStartBuilding={handleStartBuilding}
            onLearnMore={handleLearnMore}
          />
        </div>
        
        {/* Hero Image */}
        <div className="relative w-full max-w-6xl mx-auto mb-32">
          <div className="rotated-image">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Linear app interface showing inbox and issue management" 
              className="w-full h-auto rounded-xl border border-border-dark shadow-2xl" 
            />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none"></div>
        </div>
      </section>
      
      {/* Company Logos Section */}
      <section className="relative w-full py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-0">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="hero-subheading text-muted-text">
              Powering the world's best product teams. From next-gen startups to established enterprises.
            </p>
          </div>
          
          {/* Company Logos Grid */}
          <CompanyLogos />
        </div>
      </section>
    </div>
  );
}
