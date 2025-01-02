import { X } from "lucide-react";
import { Button } from "../components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed right-0 top-0 h-full w-[250px] bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <Button variant="ghost" size="icon" className="mb-4" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-lg font-medium text-accent hover:text-primary">
              Inicio
            </a>
            <a href="/about" className="text-lg font-medium text-accent hover:text-primary">
              Nosotros
            </a>
            <a href="/services" className="text-lg font-medium text-accent hover:text-primary">
              Servicios
            </a>
            <a href="/gallery" className="text-lg font-medium text-accent hover:text-primary">
              Gallery
            </a>
            <a href="/contact" className="text-lg font-medium text-accent hover:text-primary">
              Contacto
            </a>
            <Button className="bg-secondary hover:bg-secondary/90 w-full">
              Reserva ahora
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;