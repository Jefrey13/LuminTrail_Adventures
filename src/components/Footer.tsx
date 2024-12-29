import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-accent text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sección 1: Identidad de la Empresa */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">LuminTrail</h3>
            <p className="text-white/80">
              Connecting people with nature through immersive and sustainable experiences.
            </p>
          </div>

          {/* Sección 2: Navegación Rápida */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-secondary transition-colors">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Sección 3: Información de Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@lumintrail.com" className="hover:text-secondary transition-colors">
                  info@lumintrail.com
                </a>
              </li>
              <li>
                <a href="tel:+18001234567" className="hover:text-secondary transition-colors">
                  +1 800 123 4567
                </a>
              </li>
              <li className="text-white/80">
                123 Greenway Trail, EcoCity, Earth
              </li>
            </ul>
          </div>

          {/* Sección 4: Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 my-8" />

        {/* Sección 5: Derechos Reservados */}
        <div className="text-center text-white/80">
          <p>© 2024 LuminTrail Adventures. All rights reserved.</p>
        </div>
      </div>

      {/* Botón de regreso al inicio */}
      <Button
        variant="secondary"
        size="icon"
        className={`fixed bottom-6 right-6 rounded-full transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </footer>
  );
};

export default Footer;