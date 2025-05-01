
import { Zap, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-white">
                <Zap size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-heading font-bold">ЭлектроМастер</span>
            </div>
            <p className="text-gray-400 mb-6">
              Профессиональные электромонтажные работы любой сложности.
              Безопасно, качественно, с гарантией.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Услуги</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-primary transition-colors">Монтаж электропроводки</li>
              <li className="hover:text-primary transition-colors">Установка электрощитов</li>
              <li className="hover:text-primary transition-colors">Системы освещения</li>
              <li className="hover:text-primary transition-colors">Установка розеток и выключателей</li>
              <li className="hover:text-primary transition-colors">Умный дом</li>
              <li className="hover:text-primary transition-colors">Срочный ремонт</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Компания</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-primary transition-colors">О нас</li>
              <li className="hover:text-primary transition-colors">Наши работы</li>
              <li className="hover:text-primary transition-colors">Отзывы</li>
              <li className="hover:text-primary transition-colors">Цены</li>
              <li className="hover:text-primary transition-colors">Акции</li>
              <li className="hover:text-primary transition-colors">Блог</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-primary" />
                <span>+7 800 555 3535</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-primary" />
                <span>info@electromaster.ru</span>
              </li>
              <li className="text-gray-400">
                Работаем ежедневно с 9:00 до 20:00 без выходных
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} ЭлектроМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
