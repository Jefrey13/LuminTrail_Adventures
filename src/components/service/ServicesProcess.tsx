import { Check } from "lucide-react";
const steps = [
  {
    title: "Consulta Inicial",
    description: "Discutimos tus intereses y preferencias para personalizar tu experiencia.",
  },
  {
    title: "Planificación",
    description: "Diseñamos un itinerario detallado adaptado a tus necesidades.",
  },
  {
    title: "Preparación",
    description: "Te proporcionamos toda la información y equipo necesario.",
  },
  {
    title: "La Aventura",
    description: "Vive una experiencia única con nuestros guías expertos.",
  },
];
const ServicesProcess = () => {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple y efectivo para garantizar la mejor experiencia
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <Check className="w-6 h-6" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute w-full h-0.5 bg-primary/20 top-6 left-1/2" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesProcess;