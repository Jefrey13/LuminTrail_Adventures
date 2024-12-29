import { useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
              Política de Privacidad
            </h1>
            <p className="text-xl text-accent">
              Tu privacidad es importante para nosotros. Nos comprometemos a proteger tus datos personales.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Datos que Recolectamos</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Información Personal</h3>
                <ul className="list-disc list-inside space-y-2 text-accent">
                  <li>Nombre completo</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono</li>
                </ul>

                <h3 className="text-xl font-semibold">Información Técnica</h3>
                <ul className="list-disc list-inside space-y-2 text-accent">
                  <li>Dirección IP</li>
                  <li>Datos de navegación</li>
                  <li>Cookies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Cómo Usamos los Datos</h2>
              <ul className="list-disc list-inside space-y-2 text-accent">
                <li>Procesamiento de reservas</li>
                <li>Envío de comunicaciones promocionales</li>
                <li>Mejora de nuestros servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Protección de Datos</h2>
              <p className="text-accent">
                Utilizamos tecnologías de seguridad modernas y garantizamos no compartir tus datos con terceros sin tu consentimiento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Derechos del Usuario</h2>
              <p className="text-accent mb-4">
                Tienes derecho a acceder, corregir o eliminar tus datos personales.
              </p>
              <p className="text-accent">
                Para consultas sobre privacidad, contáctanos en:{" "}
                <a href="mailto:privacy@lumintrail.com" className="text-secondary hover:underline">
                  privacy@lumintrail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;