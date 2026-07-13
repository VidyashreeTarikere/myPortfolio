const Footer = () => {
  return (
    <footer
      className="mt-16 pt-8 border-t border-[#e5e7eb] transition-all duration-300"
      data-highlightable="true"
    >
      <p className="text-sm text-[#6b7280] leading-relaxed">
        Loosely designed in Figma and coded in Visual Studio Code by yours
        truly. Built with React.js and Tailwind CSS, deployed with Vercel.
      </p>
      <p className="text-sm text-[#6b7280] mt-2">
        © {new Date().getFullYear()} Vidya Tarikere. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
