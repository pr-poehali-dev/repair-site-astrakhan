import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Электромонтаж</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              onClick={() => scrollToSection("benefits")} 
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Преимущества
            </a>
            <a 
              onClick={() => scrollToSection("services")} 
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Услуги
            </a>
            <a 
              onClick={() => scrollToSection("contact-form")} 
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Контакты
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Phone size={18} className="text-blue-600" />
            <span className="font-medium">+7 965 453 8184</span>
            <Button 
              variant="outline" 
              className="ml-4"
              onClick={() => scrollToSection("contact-form")}
            >
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a 
                onClick={() => scrollToSection("benefits")} 
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                Преимущества
              </a>
              <a 
                onClick={() => scrollToSection("services")} 
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                Услуги
              </a>
              <a 
                onClick={() => scrollToSection("contact-form")} 
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                Контакты
              </a>
              <div className="flex items-center space-x-2 pt-2">
                <Phone size={18} className="text-blue-600" />
                <span className="font-medium">+7 965 453 8184</span>
              </div>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => scrollToSection("contact-form")}
              >
                Заказать звонок
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
