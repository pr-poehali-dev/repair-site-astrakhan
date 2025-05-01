
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const projects = [
    {
      title: "Электромонтаж в загородном доме",
      description: "Полный комплекс работ: прокладка кабеля, монтаж щита, установка розеток и светильников.",
      image: "https://images.unsplash.com/photo-1510574018727-75a3dd9aa3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Частный дом"
    },
    {
      title: "Освещение в квартире",
      description: "Монтаж потолочных светильников, настенных бра и декоративной подсветки.",
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Квартира"
    },
    {
      title: "Монтаж электрощита в офисе",
      description: "Установка распределительного щита с автоматами и УЗО для офисного помещения.",
      image: "https://images.unsplash.com/photo-1631058587148-478db41a828a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Коммерческое помещение"
    },
    {
      title: "Умный дом для коттеджа",
      description: "Установка системы умного дома с управлением светом, климатом и безопасностью.",
      image: "https://images.unsplash.com/photo-1558002038-1055e2dae2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Умный дом"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Наши <span className="heading-gradient">последние проекты</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ознакомьтесь с нашими недавними работами по электромонтажу в квартирах, домах и коммерческих помещениях.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-[500px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="max-w-3xl">
                        <span className="inline-block bg-primary/90 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                          {project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-lg mb-6">
                          {project.description}
                        </p>
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          Подробнее
                          <Maximize className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-colors z-10"
            aria-label="Предыдущий проект"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-colors z-10"
            aria-label="Следующий проект"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Перейти к проекту ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
