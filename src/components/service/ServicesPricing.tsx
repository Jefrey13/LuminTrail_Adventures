import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
const plans = [
  {
    name: "Básico",
    price: "$99",
    description: "Perfecto para principiantes",
    features: [
      "Excursión de medio día",
      "Guía certificado",
      "Equipo básico incluido",
      "Seguro de actividades",
      "Snacks y bebidas",
    ],
  },
  {
    name: "Aventurero",
    price: "$199",
    description: "La experiencia completa",
    features: [
      "Excursión de día completo",
      "Guía experto certificado",
      "Equipo premium incluido",
      "Seguro completo",
      "Comidas gourmet",
      "Transporte incluido",
      "Fotos profesionales",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$299",
    description: "Experiencia VIP personalizada",
    features: [
      "Excursión personalizada",
      "Guía privado",
      "Equipo de lujo",
      "Seguro premium",
      "Gastronomía de autor",
      "Transporte privado",
      "Álbum fotográfico",
      "Regalo exclusivo",
    ],
  },
];
const ServicesPricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Planes y Precios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra el plan perfecto para tu próxima aventura
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Más popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/persona</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">
                  Reservar ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesPricing;