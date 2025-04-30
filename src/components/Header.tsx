import { useState, useEffect } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 shadow-md backdrop-blur-md dark:bg-background/90" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500 text-white">
              <Zap size={20} className="stroke-[2.5px]" />
            </div>
            <h1 className="font-display text-xl font-bold">ЭлектроПро</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-base font-medium text-foreground/80 transition-colors hover:text-electric-600"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection("benefits")} 
              className="text-base font-medium text-foreground/80 transition-colors hover:text-electric-600"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection("contact-form")} 
              className="text-base font-medium text-foreground/80 transition-colors hover:text-electric-600"
            >
              Контакты
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden items-center space-x-6 md:flex">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-electric-600" />
              <span className="font-medium">+7 923 456 7890</span>
            </div>
            <Button 
              variant="default" 
              className="shadow-md"
              onClick={() => scrollToSection("contact-form")}
            >
              Оставить заявку
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="focus:outline-none md:hidden"
            onClick={toggleMenu}
            aria-label="Меню навигации"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="animate-fade-in md:hidden">
            <nav className="flex flex-col space-y-4 border-t py-6">
              <button 
                onClick={() => scrollToSection("services")} 
                className="py-2 text-foreground/80 hover:text-electric-600"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection("benefits")} 
                className="py-2 text-foreground/80 hover:text-electric-600"
              >
                Преимущества
              </button>
              <button 
                onClick={() => scrollToSection("contact-form")} 
                className="py-2 text-foreground/80 hover:text-electric-600"
              >
                Контакты
              </button>
              <div className="flex items-center space-x-2 pt-2">
                <Phone size={18} className="text-electric-600" />
                <span className="font-medium">+7 923 456 7890</span>
              </div>
              <Button 
                variant="default" 
                className="mt-2 w-full"
                onClick={() => scrollToSection("contact-form")}
              >
                Оставить заявку
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
