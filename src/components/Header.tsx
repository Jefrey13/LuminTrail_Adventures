import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-bold text-primary">
            LuminTrail
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-accent">
              Inicio
            </a>
            <a href="#about" className="nav-link text-accent">
              Nosotros
            </a>
            <a href="#services" className="nav-link text-accent">
              Servicios
            </a>
            <a href="#contact" className="nav-link text-accent">
              Contacto
            </a>
            <Button className="bg-secondary hover:bg-secondary/90">
              Reserva ahora
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;