const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000')"
    }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Contáctanos
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Estamos aquí para ayudarte a planificar tu próxima aventura
        </p>
      </div>
    </section>
  );
};

export default ContactHero;