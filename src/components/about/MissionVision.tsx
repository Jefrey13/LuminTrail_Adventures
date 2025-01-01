import { useEffect, useRef } from "react";
const MissionVision = () => {
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
      className="py-20 bg-primary/5 opacity-0 transform translate-y-4 transition-all duration-700 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestra Misión</h2>
            <p className="text-accent">
              Facilitar experiencias transformadoras en la naturaleza que inspiren la conservación ambiental y promuevan el bienestar personal, creando conexiones significativas entre las personas y los entornos naturales.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-secondary mb-4">Nuestra Visión</h2>
            <p className="text-accent">
              Ser líderes globales en turismo sostenible, inspirando un movimiento de viajeros conscientes que valoren y protejan los espacios naturales para las generaciones futuras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MissionVision;