import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "¿Cómo puedo reservar una aventura?",
    answer: "Puedes reservar a través de nuestro formulario de contacto o llamándonos directamente. Te responderemos en menos de 24 horas con toda la información necesaria."
  },
  {
    question: "¿Qué equipo necesito llevar?",
    answer: "Proporcionamos todo el equipo técnico necesario. Solo necesitas traer ropa adecuada, calzado cómodo y artículos personales básicos."
  },
  {
    question: "¿Ofrecen servicios personalizados?",
    answer: "Sí, podemos personalizar cualquiera de nuestras aventuras según tus necesidades y preferencias específicas."
  }
];

const ContactFAQ = () => {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white/50 backdrop-blur-sm rounded-lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6">
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

export default ContactFAQ;