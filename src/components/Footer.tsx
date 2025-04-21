import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">РемонтАстрахань</h3>
            <p className="text-gray-400 mb-4">
              Профессиональный ремонт квартир, домов и офисов в Астрахани с гарантией качества
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-blue-400" />
                <span>+7 927 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-blue-400" />
                <span>info@remont-astrakhan.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-blue-400" />
                <span>г. Астрахань, ул. Кирова, 20, офис 12</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-blue-400" />
                <span>Пн-Пт: 9:00-18:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Косметический ремонт</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Капитальный ремонт</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Ремонт под ключ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Дизайн интерьера</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Отделочные работы</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Портфолио</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Цены</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} РемонтАстрахань. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
