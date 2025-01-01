const AboutHero = () => {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Nuestra Historia
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Descubre cómo LuminTrail Adventures ha estado conectando personas con la naturaleza desde 2016
        </p>
      </div>
    </section>
  );
};

export default AboutHero;