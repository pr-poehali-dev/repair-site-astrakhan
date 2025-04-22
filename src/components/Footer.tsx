import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Электромонтаж</h3>
            <p className="text-gray-400 mb-4">
              Профессиональные электромонтажные работы в Астрахани с гарантией качества и безопасности
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-blue-400" />
                <span>+7 965 453 8184</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-blue-400" />
                <span>Viktoriys312@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-blue-400" />
                <span>г. Астрахань</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Электромонтаж под ключ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Замена электропроводки</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Установка розеток и выключателей</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Монтаж электрощитов</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Устранение неисправностей</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Электромонтаж. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
