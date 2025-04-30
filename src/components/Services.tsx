import { 
  Zap, 
  Home, 
  Building2, 
  ShieldCheck, 
  LightbulbIcon, 
  Plug 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Электромонтаж в квартирах",
      description: "Полная или частичная замена проводки, установка розеток, выключателей и светильников в жилых помещениях.",
      image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Электромонтаж в офисах",
      description: "Прокладка силовых и слаботочных сетей, монтаж освещения и электрощитов в коммерческих помещениях.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Монтаж электрощитов",
      description: "Профессиональная сборка и установка электрощитов любой сложности с учетом всех норм безопасности.",
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Устранение неисправностей",
      description: "Диагностика и ремонт неисправностей в электросети, устранение коротких замыканий и перепадов напряжения.",
      image: "https://images.unsplash.com/photo-1517490232338-06b912a786b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <LightbulbIcon className="h-8 w-8 text-primary" />,
      title: "Монтаж освещения",
      description: "Установка различных систем освещения: потолочного, точечного, светодиодного и декоративного.",
      image: "https://images.unsplash.com/photo-1565043589221-5239bffd3f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Plug className="h-8 w-8 text-primary" />,
      title: "Замена розеток и выключателей",
      description: "Быстрая и аккуратная замена старых розеток и выключателей на новые с соблюдением всех правил безопасности.",
      image: "https://images.unsplash.com/photo-1558652229-90661111a128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр электромонтажных работ для жилых и коммерческих помещений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-white border border-gray-100 card-shadow service-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="shadow-md"
          >
            Оставить заявку на услугу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
