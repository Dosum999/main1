interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const footerSections = [
    {
      title: "Features",
      links: [
        "Plan",
        "Build", 
        "Insights",
        "Customer Requests",
        "Linear Asks",
        "Security",
        "Mobile"
      ]
    },
    {
      title: "Product",
      links: [
        "Pricing",
        "Method",
        "Integrations",
        "Templates",
        "Documentation",
        "Roadmap",
        "What's New"
      ]
    },
    {
      title: "Company",
      links: [
        "About",
        "Blog",
        "Careers",
        "Customers",
        "Brand",
        "Ethics",
        "Legal"
      ]
    },
    {
      title: "Resources",
      links: [
        "Community",
        "Contact",
        "DPA",
        "Privacy",
        "Status",
        "Terms",
        "Updates"
      ]
    }
  ];

  return (
    <footer className={`border-t border-[#23252a] bg-dark-bg ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-0 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-5 h-5 bg-light-text rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-dark-bg rounded-sm"></div>
              </div>
              <span className="text-light-text font-semibold">Linear</span>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-light-text text-sm font-semibold">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-text text-sm hover:text-light-text transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#23252a] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-text text-sm">
            © 2024 Linear. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-text hover:text-light-text text-sm transition-colors duration-200">
              Twitter
            </a>
            <a href="#" className="text-muted-text hover:text-light-text text-sm transition-colors duration-200">
              GitHub
            </a>
            <a href="#" className="text-muted-text hover:text-light-text text-sm transition-colors duration-200">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}