import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-800">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Электромонтаж</h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Профессиональные электромонтажные работы любой сложности для квартир, домов и офисов.
              Качество, надежность и безопасность гарантированы.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="text-primary mr-3" />
                <span>+7 965 453 8184</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-primary mr-3" />
                <span>Viktoriys312@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="md:ml-auto md:text-right">
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-primary transition-colors">Электромонтаж в квартирах</li>
              <li className="hover:text-primary transition-colors">Электромонтаж в офисах</li>
              <li className="hover:text-primary transition-colors">Монтаж электрощитов</li>
              <li className="hover:text-primary transition-colors">Устранение неисправностей</li>
              <li className="hover:text-primary transition-colors">Монтаж освещения</li>
              <li className="hover:text-primary transition-colors">Замена розеток и выключателей</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Электромонтаж. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
