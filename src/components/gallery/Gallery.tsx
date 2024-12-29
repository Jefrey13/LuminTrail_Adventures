import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "../../lib/utils"

// Definición de las imágenes y sus detalles
const galleryItems = [
  {
    id: 1,
    category: "Nature Photography",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Mountain Wildlife",
    description: "Majestic deer in their natural mountain habitat",
    date: "2024-01-15",
  },
  {
    id: 2,
    category: "Adventure Excursions",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    title: "Safari Adventure",
    description: "Unique wildlife encounters in the African savanna",
    date: "2024-01-20",
  },
  {
    id: 3,
    category: "International Destinations",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    title: "Mountain Expedition",
    description: "High-altitude adventures in pristine landscapes",
    date: "2024-02-01",
  },
  {
    id: 4,
    category: "Nature Photography",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    title: "Alpine Wildlife",
    description: "Mountain goats in their natural habitat",
    date: "2024-02-05",
  },
  {
    id: 5,
    category: "Adventure Excursions",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
    title: "Jungle Experience",
    description: "Close encounters with exotic wildlife",
    date: "2024-02-10",
  },
  {
    id: 6,
    category: "International Destinations",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    title: "Desert Adventure",
    description: "Camel trek through stunning desert landscapes",
    date: "2024-02-15",
  },
];

const categories = [
  "All",
  "Nature Photography",
  "Adventure Excursions",
  "International Destinations",
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(
    null
  );

  const filteredImages = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Moments Captured
          </h2>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Discover breathtaking moments from our journeys around the world
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-0 bg-background/80 backdrop-blur-sm py-4 z-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="animate-fade-in"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-sm">
            <DialogHeader>
              <DialogTitle>{selectedImage?.title}</DialogTitle>
              <DialogDescription>
                {selectedImage?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video">
              <img
                src={selectedImage?.image}
                alt={selectedImage?.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-between items-center text-sm text-accent">
              <span>Category: {selectedImage?.category}</span>
              <span>Date: {selectedImage?.date}</span>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;