const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/40 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-sm text-white/40">
        <p>© {currentYear} Muhammad Firzatullah Aqila Risfayadi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
