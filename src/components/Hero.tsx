import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-primary/95 to-violet-700 text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
                Надежные решения для вашего дома
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display">
              Профессиональный электромонтаж
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Качественные электромонтажные работы любой сложности для квартир, домов и офисов.
              От простой замены розеток до полной электрификации зданий.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Оставить заявку
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                size="lg" 
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-violet-600/50 rounded-2xl transform rotate-3"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-violet-800/50 rounded-2xl transform -rotate-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Профессиональный электрик выполняет электромонтажные работы" 
                className="w-full h-[450px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
