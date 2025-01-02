import { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
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
const Contact = () => {
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
  };
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative overflow-hidden opacity-0 transform translate-y-4 transition-all duration-700 ease-out bg-gradient-to-b from-background to-primary/5"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Estamos aquí para ayudarte a planificar tu próxima aventura
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario de contacto */}
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nombre completo"
                  className="bg-white/70"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  className="bg-white/70"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  className="bg-white/70"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tu mensaje"
                  className="bg-white/70 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 transition-all duration-300"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
          {/* Información de contacto y mapa */}
          <div className="space-y-8">
            {/* Mapa placeholder - Aquí irá el mapa interactivo */}
            <div className="bg-accent/10 rounded-lg h-[300px] flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173616.08947828287!2d-86.34776994105954!3d12.104593015979976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71560dd907880b%3A0x6c5ef4a2144f4c6a!2sManagua!5e0!3m2!1sen!2sni!4v1735501948418!5m2!1sen!2sni" width="600" height="300" loading="lazy"></iframe>
            </div>
            {/* Información de contacto */}
            <div className="grid gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Ubicación</h3>
                  <p className="text-accent">Calle Principal 123, Madrid</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-accent">info@lumintrail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Teléfono</h3>
                  <p className="text-accent">+34 912 345 678</p>
                </div>
              </div>
            </div>
            {/* Redes sociales */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* FAQs */}
        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Preguntas Frecuentes
          </h3>
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
      {/* Separador de onda */}
      <div className="absolute bg-white bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f3f4f6"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default Contact;