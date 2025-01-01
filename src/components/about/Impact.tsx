import { useEffect, useRef } from "react";
const impactStats = [
  {
    number: "5000+",
    label: "Árboles plantados"
  },
  {
    number: "100%",
    label: "Carbono neutral"
  },
  {
    number: "2000+",
    label: "Kg de residuos recolectados"
  }
];
const Impact = () => {
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
      className="py-20 bg-gradient-to-b from-primary/5 to-secondary/5 opacity-0 transform translate-y-4 transition-all duration-700 ease-out"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          Nuestro Impacto Ambiental
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-accent">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Impact;
