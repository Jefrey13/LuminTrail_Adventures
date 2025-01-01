import { useEffect, useRef } from "react";
import { Heart, Leaf, Users } from "lucide-react";
const values = [
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y transmitimos ese entusiasmo en cada experiencia."
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Protegemos y preservamos los entornos naturales que exploramos."
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Creamos conexiones significativas entre personas y culturas."
  }
];
const Values = () => {
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
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          Nuestros Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
              <p className="text-accent">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Values;