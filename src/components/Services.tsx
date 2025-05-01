
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Lightbulb, HomeIcon, Plug, Wrench, Cable } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Cable />,
      title: "Электропроводка",
      description: "Полная замена или прокладка новой электропроводки в жилых и коммерческих помещениях.",
      link: "#contact"
    },
    {
      icon: <Zap />,
      title: "Монтаж щитов",
      description: "Установка и подключение распределительных щитов, сборка по индивидуальным проектам.",
      link: "#contact"
    },
    {
      icon: <Lightbulb />,
      title: "Системы освещения",
      description: "Монтаж внутреннего и наружного освещения, декоративная подсветка, умное освещение.",
      link: "#contact"
    },
    {
      icon: <Plug />,
      title: "Розетки и выключатели",
      description: "Установка и замена розеток, выключателей, диммеров и других электроточек.",
      link: "#contact"
    },
    {
      icon: <HomeIcon />,
      title: "Умный дом",
      description: "Проектирование и монтаж систем умного дома с удаленным управлением.",
      link: "#contact"
    },
    {
      icon: <Wrench />,
      title: "Срочный ремонт",
      description: "Оперативный выезд для устранения неисправностей в электропроводке.",
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary">
            <Zap size={16} className="mr-2" />
            Наши услуги
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Полный комплекс <span className="heading-gradient">электромонтажных</span> работ
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Предоставляем широкий спектр услуг по электромонтажу с гарантией качества.
            От простой замены розетки до полной электрификации дома.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="service-icon inline-flex mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
          >
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
}
