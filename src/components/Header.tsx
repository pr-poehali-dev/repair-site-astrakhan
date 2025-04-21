import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">РемонтАстрахань</span>
            </a>
          </div>

          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection("benefits")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection("contact-form")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+79271234567" className="flex items-center text-gray-800 hover:text-blue-600 mr-4">
              <Phone size={18} className="mr-2" />
              <span>+7 927 123-45-67</span>
            </a>
            <Button 
              onClick={() => scrollToSection("contact-form")}
              size="sm"
            >
              Заказать звонок
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Преимущества
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("contact-form")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Контакты
            </button>
            <a 
              href="tel:+79271234567" 
              className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              <Phone size={18} className="mr-2" />
              <span>+7 927 123-45-67</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
