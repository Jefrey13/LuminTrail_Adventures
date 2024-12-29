import { Button } from "./ui/button";
import { Search, Map } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 animate-fade-in">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Página No Encontrada
          </h2>
          <p className="text-lg text-accent mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Parece que la página que buscas no existe o ha sido movida.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              className="bg-secondary hover:bg-secondary/90 w-full md:w-auto"
              onClick={() => window.location.href = '/'}
            >
              Volver al Inicio
            </Button>
            <Button
              variant="outline"
              className="w-full md:w-auto"
              onClick={() => window.location.href = '/sitemap'}
            >
              <Map className="mr-2 h-4 w-4" />
              Ver Mapa del Sitio
            </Button>
          </div>

          <div className="max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar en el sitio..."
                className="w-full px-4 py-2 rounded-full border border-accent/20 focus:outline-none focus:border-secondary"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-secondary hover:bg-secondary/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;