
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, Clock } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary animate-fade-in">
              <Zap size={16} className="mr-2" />
              Надежный электромонтаж с гарантией
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
              Профессиональные <span className="heading-gradient">электромонтажные</span> работы
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Выполняем полный спектр электромонтажных работ в квартирах, домах и офисах с соблюдением всех норм безопасности. Качество, надежность и доступные цены.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-base"
                size="lg"
              >
                Получить бесплатную консультацию
              </Button>
              <Button 
                onClick={() => scrollToSection("services")}
                variant="outline" 
                className="group"
                size="lg"
              >
                Наши услуги
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Shield size={20} />
                </div>
                <span className="text-gray-700 dark:text-gray-200">Гарантия до 5 лет</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Clock size={20} />
                </div>
                <span className="text-gray-700 dark:text-gray-200">Выезд в день обращения</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="absolute inset-0 -m-6 rounded-3xl bg-primary/20 transform rotate-3"></div>
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Профессиональный электромонтаж" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 dark:bg-gray-900/50">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Опыт более 10 лет</h3>
                      <p className="text-sm text-white/80">Более 1500 успешных проектов</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
