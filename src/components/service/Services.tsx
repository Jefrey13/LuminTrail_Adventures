import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Mountain, Tent, Camera } from "lucide-react";

const services = [
  {
    icon: Mountain,
    title: "Excursiones de Aventura",
    description: "Caminatas, buceo y montañismo guiados por expertos.",
  },
  {
    icon: Tent,
    title: "Campamentos Personalizados",
    description: "Camping diseñado a la medida con equipo de alta calidad.",
  },
  {
    icon: Camera,
    title: "Fotografía de Naturaleza",
    description: "Excursiones para capturar los paisajes más espectaculares.",
  },
];

const Services = () => {
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
      id="services"
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transform translate-y-4 transition-all duration-700 ease-out relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Descubre experiencias únicas diseñadas para los amantes de la aventura
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-secondary hover:bg-secondary/90">
                  Descubre más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Wave separator */}
      {/* <div className="absolute bg-white bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f3f4f6"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Services;