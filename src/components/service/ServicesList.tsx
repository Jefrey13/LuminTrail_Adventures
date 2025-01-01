import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Mountain, Tent, Camera, Compass, Users, Sun } from "lucide-react";
import { Button } from "../ui/button";
const services = [
  {
    icon: Mountain,
    title: "Excursiones de Aventura",
    description: "Caminatas, buceo y montañismo guiados por expertos certificados.",
    price: "Desde $99",
  },
  {
    icon: Tent,
    title: "Campamentos Personalizados",
    description: "Camping diseñado a la medida con equipo de alta calidad y guías expertos.",
    price: "Desde $149",
  },
  {
    icon: Camera,
    title: "Fotografía de Naturaleza",
    description: "Tours fotográficos para capturar los paisajes más espectaculares.",
    price: "Desde $129",
  },
  {
    icon: Compass,
    title: "Expediciones",
    description: "Viajes de varios días a destinos remotos y extraordinarios.",
    price: "Desde $299",
  },
  {
    icon: Users,
    title: "Grupos Privados",
    description: "Experiencias exclusivas diseñadas para grupos y familias.",
    price: "Desde $199",
  },
  {
    icon: Sun,
    title: "Retiros de Bienestar",
    description: "Combina aventura con meditación y yoga en la naturaleza.",
    price: "Desde $179",
  },
];
const ServicesList = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Experiencias Únicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios diseñados para crear momentos inolvidables
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
                <Button className="w-full">Reservar ahora</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesList;