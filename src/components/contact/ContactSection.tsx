import { useRef, useEffect } from "react";
import ContactHero from "../contact/ContactHero";
import ContactForm from "../contact/ContactForm";
import ContactFAQ from "../contact/ContactFAQ";
import ScrollToTop from "../about/ScrollToTop";

const ContactSection = () => {
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
    <>
      <main>
        <section
          ref={sectionRef}
          className="py-20 relative overflow-hidden opacity-0 transform translate-y-4 transition-all duration-700 ease-out bg-gradient-to-b from-background to-primary/5 min-h-screen pt-32"
        >
          {/* Elementos decorativos */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <ContactHero />

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <ContactForm />
              
              {/* Mapa placeholder */}
              <div className="bg-accent/10 rounded-lg h-[300px] flex items-center justify-center">
                <p className="text-accent">Mapa interactivo aquí</p>
              </div>
            </div>

            <ContactFAQ />
          </div>

          {/* Separador de onda */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              className="relative block w-full h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-background"
              />
            </svg>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </>
  );
};

export default ContactSection;