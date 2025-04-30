import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Монтаж электропроводки",
      description: "Полная замена или установка новой электропроводки в квартирах, домах и офисах с соблюдением всех норм и стандартов.",
      image: "https://images.unsplash.com/photo-1555963966-b7ae5404f4ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Установка электрощитов",
      description: "Монтаж, замена и обслуживание вводных и распределительных щитов с установкой всей необходимой защитной аппаратуры.",
      image: "https://images.unsplash.com/photo-1631058587148-478db41a828a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Монтаж освещения",
      description: "Разработка и реализация систем освещения любой сложности: от базовой до декоративной и архитектурной подсветки.",
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Установка розеток и выключателей",
      description: "Замена старых и установка новых электрических точек с возможностью переноса и добавления дополнительных розеток.",
      image: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Умный дом",
      description: "Проектирование и монтаж систем умного дома с возможностью удаленного управления всеми электрическими приборами.",
      image: "https://images.unsplash.com/photo-1558002038-1055e2dae2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Аварийные вызовы",
      description: "Экстренный выезд для устранения любых неисправностей в электропроводке, восстановление электроснабжения в короткие сроки.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    }
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-electric-100 px-4 py-1.5 text-sm font-medium text-electric-800">
            Наши услуги
          </span>
          <h2 className="gradient-heading mb-6 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Полный спектр электромонтажных работ
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-muted-foreground">
            Предоставляем широкий выбор профессиональных электромонтажных услуг 
            для жилых и коммерческих объектов. Гарантируем качество и безопасность.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group h-96 animate-fade-in rounded-2xl bg-white shadow-lg dark:bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">
                <h3 className="mb-2 font-display text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-sm text-white/90">{service.description}</p>
                <div className="transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button 
                    size="sm" 
                    variant="default" 
                    className="mt-2 bg-electric-500 hover:bg-electric-600"
                    onClick={scrollToForm}
                  >
                    Заказать
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-electric-500 text-white hover:bg-electric-600"
          >
            Получить консультацию
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
