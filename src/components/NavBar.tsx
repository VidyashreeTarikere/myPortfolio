import { useState, useEffect } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = [
      "about",
      "experience",
      "education",
      "certificates",
      "projects",
      "case-studies",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px", // Adjusts when the section becomes "active"
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
    { id: "case-studies", label: "Case Studies" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <>
      {/* Brand Section */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] font-['Inter',sans-serif]">
          Vidya Tarikere
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#2a9d8f] mt-2">
          Business Analyst & Product Owner
        </p>
        <p className="text-base text-[#4a4a4a] mt-3 leading-relaxed">
          I bridge business needs and technical solutions to deliver impactful
          products.
        </p>
      </div>

      {/* Navigation Links with Left Dash */}
      <nav className="mt-12 space-y-3">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              group relative block text-lg font-medium transition-all duration-300 pl-4 
              ${
                activeSection === item.id
                  ? "text-[#0a0a0a]"
                  : "text-[#4a4a4a] hover:text-[#0a0a0a]"
              }
            `}
          >
            {/* The vertical dash/line */}
            <span
              className={`
                absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-full transition-all duration-300
                ${
                  activeSection === item.id
                    ? "bg-[#2a9d8f] opacity-100"
                    : "bg-[#2a9d8f] opacity-0 group-hover:opacity-50"
                }
              `}
            />
            {item.label}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-12">
        <a
          href="https://www.linkedin.com/in/vidyashreetarikere/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://github.com/VidyashreeTarikere"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors duration-200"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
        <a
          href="mailto:tarikerevidya@gmail.com"
          className="text-[#4a4a4a] hover:text-[#0a0a0a] transition-colors duration-200"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default NavBar;
