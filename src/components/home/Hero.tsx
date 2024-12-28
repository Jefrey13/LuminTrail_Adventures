import { Button } from "../ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000')",
      }}
    >
      <div className="absolute inset-0 hero-gradient" />
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Vive Tu Aventura
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Creemos que los pequeños momentos hacen la diferencia
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Explorar destinos
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
              <Play className="mr-2 h-4 w-4" />
              Ver video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;