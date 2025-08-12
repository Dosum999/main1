interface CompanyLogosProps {
  className?: string;
}

export function CompanyLogos({ className }: CompanyLogosProps) {
  const logos = [
    {
      name: "Airbnb",
      url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
    },
    {
      name: "Stripe", 
      url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
    },
    {
      name: "Notion",
      url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
    },
    {
      name: "Figma",
      url: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
    },
    {
      name: "GitHub",
      url: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
    },
    {
      name: "Slack",
      url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
    },
    {
      name: "Discord",
      url: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
    },
    {
      name: "Vercel",
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=50"
    }
  ];

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center ${className}`}>
      {logos.map((logo, index) => (
        <div key={index} className="relative group">
          <div className="absolute inset-0 blur-sm opacity-30 pointer-events-none">
            <img 
              src={logo.url}
              alt={`${logo.name} logo`}
              className="h-12 w-auto company-logo"
            />
          </div>
          <img 
            src={logo.url}
            alt={`${logo.name} logo`}
            className="relative h-12 w-auto company-logo"
          />
        </div>
      ))}
    </div>
  );
}
