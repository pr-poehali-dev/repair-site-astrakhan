import { Phone, Mail, MapPin, Zap, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-electric-950 pt-16 text-white">
      <div className="container-custom">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500 text-white">
                <Zap size={20} className="stroke-[2.5px]" />
              </div>
              <h2 className="font-display text-xl font-bold">ЭлектроПро</h2>
            </div>
            <p className="mb-6 text-white/70">
              Профессиональные электромонтажные работы любой сложности. 
              Гарантируем безопасность, качество и надежность на долгие годы.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-electric-500">
                <Facebook size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-electric-500">
                <Instagram size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-electric-500">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 font-display text-lg font-semibold">Услуги</h3>
            <ul className="space-y-3 text-white/70">
              <li className="transition-colors hover:text-electric-400">Монтаж электропроводки</li>
              <li className="transition-colors hover:text-electric-400">Установка электрощитов</li>
              <li className="transition-colors hover:text-electric-400">Монтаж освещения</li>
              <li className="transition-colors hover:text-electric-400">Установка розеток</li>
              <li className="transition-colors hover:text-electric-400">Умный дом</li>
              <li className="transition-colors hover:text-electric-400">Аварийные вызовы</li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 font-display text-lg font-semibold">Полезные ссылки</h3>
            <ul className="space-y-3 text-white/70">
              <li className="transition-colors hover:text-electric-400">О компании</li>
              <li className="transition-colors hover:text-electric-400">Наши преимущества</li>
              <li className="transition-colors hover:text-electric-400">Услуги</li>
              <li className="transition-colors hover:text-electric-400">Портфолио</li>
              <li className="transition-colors hover:text-electric-400">Отзывы</li>
              <li className="transition-colors hover:text-electric-400">Контакты</li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 font-display text-lg font-semibold">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-electric-400" />
                <span className="text-white/70">+7 923 456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-electric-400" />
                <span className="text-white/70">electro-pro@example.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-electric-400" />
                <span className="text-white/70">
                  Работаем во всех районах города и области
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
          <p>© {currentYear} ЭлектроПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
