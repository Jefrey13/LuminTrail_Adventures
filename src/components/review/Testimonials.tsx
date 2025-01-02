import { useEffect, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    location: "Barcelona, España",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZZeUk4Usk3Bc6EQNX5B6EYP6NnBV-kcT2QeoWGfZ41wwccs-9n_jkNLYK8QkbQyspM8&usqp=CAU",
    rating: 5,
    text: "Una experiencia inolvidable. El equipo fue increíblemente profesional y las vistas simplemente espectaculares.",
  },
  {
    name: "Carlos Rodríguez",
    location: "Madrid, España",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYHczdeKzxndLbnCe52SPPZorUin_rQqBulNArqeZ0gE8xr43EIMR8p1h5K5YzASKtxw&usqp=CAU",
    rating: 5,
    text: "Los campamentos personalizados superaron todas mis expectativas. Cada detalle fue cuidadosamente planificado.",
  },
  {
    name: "Ana Martínez",
    location: "Valencia, España",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xXqlonSS3lzwZK85t_nbtEe4tZGrtVbaVSSOnlHii1klfru24ntkrKNJPSvnpVxlx1M&usqp=CAU",
    rating: 5,
    text: "Las sesiones de fotografía fueron mágicas. Capturamos momentos únicos en locaciones impresionantes.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.
            remove
            ("opacity-0");
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
      className="py-20 relative overflow-hidden opacity-0 transform translate-y-4 transition-all duration-700 ease-out bg-gradient-to-b from-background to-accent/5"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Experiencias reales de aventureros que confiaron en nosotros
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-secondary text-secondary"
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg italic text-accent">
                          "{testimonial.text}"
                        </blockquote>
                        <div>
                          <p className="font-semibold text-primary">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-accent">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="secondary"
            size="lg"
            className="animate-fade-in"
          >
            Comparte tu Experiencia
          </Button>
        </div>
      </div>

     {/* Wave separator */}
{/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none bg-white">
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
</div> */}

    </section>
  );
};

export default Testimonials;