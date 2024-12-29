import { useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              variant="ghost"
              className="mb-4"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-accent">
              Al usar nuestro sitio web, aceptas estos términos y condiciones en su totalidad.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Uso del Sitio</h2>
              <ul className="list-disc list-inside space-y-2 text-accent">
                <li>Debes tener al menos 18 años para usar nuestros servicios</li>
                <li>No puedes usar el sitio para fines ilegales</li>
                <li>Debes proporcionar información precisa y actualizada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Servicios Ofrecidos</h2>
              <div className="space-y-4 text-accent">
                <h3 className="text-xl font-semibold">Reservas</h3>
                <p>Las reservas están sujetas a disponibilidad y confirmación.</p>
                
                <h3 className="text-xl font-semibold">Cancelaciones</h3>
                <p>Las cancelaciones deben realizarse con al menos 48 horas de anticipación.</p>
                
                <h3 className="text-xl font-semibold">Reembolsos</h3>
                <p>Los reembolsos se procesarán según nuestra política de cancelación.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Propiedad Intelectual</h2>
              <p className="text-accent">
                Todo el contenido presente en este sitio web, incluyendo textos, imágenes y marcas,
                es propiedad de LuminTrail Adventures o sus licenciantes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Modificaciones</h2>
              <p className="text-accent">
                Nos reservamos el derecho de modificar estos términos en cualquier momento.
                Los cambios entrarán en vigor inmediatamente después de su publicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Contacto</h2>
              <p className="text-accent">
                Para consultas sobre estos términos, contáctanos en:{" "}
                <a href="mailto:legal@lumintrail.com" className="text-secondary hover:underline">
                  legal@lumintrail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;