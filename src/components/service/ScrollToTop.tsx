import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";
export const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Button
      variant="secondary"
      size="icon"
      className={`fixed bottom-6 right-6 rounded-full transition-all duration-300 ${
        showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
};