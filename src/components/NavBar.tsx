const Navbar = () => {  

  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Educación', href: '#education' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#141929]/90 to-[#232b3a]/80 backdrop-blur ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="animated-title flex items-center px-2 py-1 rounded-md hover:bg-blue-50 transition"
        >
          <img
            src="/LogoGM.png"
            alt="Logo GM"
            className="h-10 w-auto object-contain drop-shadow-md"
          />
        </a>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="animated-title relative text-gray-200 font-semibold px-3 py-2 rounded-md transition-all duration-200 hover:text-black hover:bg-[#141929]/90 group"
            >
              <span className="relative">
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;