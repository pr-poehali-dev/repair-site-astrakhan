
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 shadow-md backdrop-blur-sm dark:bg-gray-900/95" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-white">
              <Zap size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-heading font-bold">ЭлектроМастер</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection("work")}
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
            >
              Наши работы
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
            >
              Контакты
            </button>
          </nav>

          {/* CTA Button & Phone */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <Phone size={18} className="text-primary" />
              <span className="font-medium">+7 800 555 3535</span>
            </div>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu size={24} className="text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-base py-2 font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-base py-2 font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection("work")}
                className="text-base py-2 font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
              >
                Наши работы
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-base py-2 font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
              >
                Контакты
              </button>
              <div className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-200">
                <Phone size={18} className="text-primary" />
                <span className="font-medium">+7 800 555 3535</span>
              </div>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Заказать звонок
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
