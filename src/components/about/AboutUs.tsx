import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transform translate-y-4 transition-all duration-700 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
            Acerca de Nosotros
          </h2>
          <p className="text-xl text-center text-accent mb-12">
            Conectamos personas con la naturaleza desde 2016
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800"
                alt="Naturaleza"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nuestra Historia
              </h3>
              <p className="text-accent mb-6">
                Fundada en 2016, LuminTrail Adventures nació de la pasión de sus creadores por la naturaleza y el espíritu de aventura. Comenzamos ofreciendo caminatas locales en reservas ecológicas, y con el tiempo hemos expandido nuestros servicios a viajes internacionales.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90">
                Conoce más
              </Button>
            </div>
          </div>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nuestra Misión
              </h3>
              <p className="text-accent">
                Facilitar experiencias transformadoras en la naturaleza que inspiren la conservación ambiental y promuevan el bienestar personal, creando conexiones significativas entre las personas y los entornos naturales.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Nuestra Visión
              </h3>
              <p className="text-accent">
                Ser líderes globales en turismo sostenible, inspirando un movimiento de viajeros conscientes que valoren y protejan los espacios naturales para las generaciones futuras.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Nuestros Valores
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Pasión</h4>
                <p className="text-accent">Amamos lo que hacemos y transmitimos ese entusiasmo en cada experiencia.</p>
              </div>
              <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Sostenibilidad</h4>
                <p className="text-accent">Protegemos y preservamos los entornos naturales que exploramos.</p>
              </div>
              <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Comunidad</h4>
                <p className="text-accent">Creamos conexiones significativas entre personas y culturas.</p>
              </div>
            </div>
          </div>

          {/* Impacto Ambiental */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Nuestro Impacto Ambiental
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">5000+</h4>
                <p className="text-accent">Árboles plantados</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">100%</h4>
                <p className="text-accent">Carbono neutral</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">2000+</h4>
                <p className="text-accent">Kg de residuos recolectados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;