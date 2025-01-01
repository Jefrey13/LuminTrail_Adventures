import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-primary mb-6">Envíanos un mensaje</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input placeholder="Nombre completo" className="bg-white/70" />
        <Input type="email" placeholder="Correo electrónico" className="bg-white/70" />
        <Input type="tel" placeholder="Teléfono" className="bg-white/70" />
        <Textarea placeholder="Tu mensaje" className="bg-white/70 min-h-[150px]" />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Enviar Mensaje
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;