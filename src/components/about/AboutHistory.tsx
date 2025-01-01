import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

const AboutHistory = () => {
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
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transform translate-y-4 transition-all duration-700 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800"
                alt="Naturaleza"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Nuestra Historia
              </h2>
              <p className="text-accent mb-6">
                Fundada en 2016, LuminTrail Adventures nació de la pasión de sus creadores por la naturaleza y el espíritu de aventura. Comenzamos ofreciendo caminatas locales en reservas ecológicas, y con el tiempo hemos expandido nuestros servicios a viajes internacionales.
              </p>
              <p className="text-accent mb-6">
                A lo largo de los años, hemos guiado a más de 10,000 aventureros a través de los senderos más hermosos del mundo, creando experiencias inolvidables y fomentando una conexión profunda con la naturaleza.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90">
                Conoce más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHistory;