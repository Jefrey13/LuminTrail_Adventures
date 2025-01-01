import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/accordion";
  const faqs = [
    {
      question: "¿Qué nivel de condición física necesito?",
      answer: "Nuestras actividades están diseñadas para diferentes niveles de condición física. Cada experiencia está claramente categorizada y nuestro equipo te ayudará a elegir la más adecuada para ti.",
    },
    {
      question: "¿Qué equipo necesito traer?",
      answer: "Proporcionamos todo el equipo técnico necesario. Solo necesitas traer ropa adecuada, calzado apropiado y artículos personales que especificaremos en la guía de preparación.",
    },
    {
      question: "¿Qué sucede si el clima no es favorable?",
      answer: "La seguridad es nuestra prioridad. En caso de condiciones climáticas adversas, trabajaremos contigo para reprogramar la actividad o ofrecerte una alternativa adecuada.",
    },
    {
      question: "¿Están incluidos los seguros?",
      answer: "Sí, todas nuestras actividades incluyen seguro de accidentes. Los detalles específicos de la cobertura varían según el plan seleccionado.",
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer: "Ofrecemos reembolso completo para cancelaciones con 7 días de anticipación. Para cancelaciones con menos tiempo, aplicamos un cargo según nuestra política detallada.",
    },
  ];
  const ServicesFAQ = () => {
    return (
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  };
  export default ServicesFAQ;