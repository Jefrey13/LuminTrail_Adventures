import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/button";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Ubicación</h3>
            <p className="text-muted-foreground">Calle Principal 123, Madrid</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-muted-foreground">info@lumintrail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Teléfono</h3>
            <p className="text-muted-foreground">+34 912 345 678</p>
          </div>
        </div>
      </div>

      <div className="bg-accent/5 p-6 rounded-lg">
        <h3 className="font-semibold text-lg mb-4">Horario de Atención</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Lunes - Viernes</span>
            <span>9:00 - 18:00</span>
          </li>
          <li className="flex justify-between">
            <span>Sábados</span>
            <span>10:00 - 14:00</span>
          </li>
          <li className="flex justify-between">
            <span>Domingos</span>
            <span>Cerrado</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;