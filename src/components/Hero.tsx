import { Button } from "@/components/ui/button";
import { Zap, PhoneCall, ChevronRight } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-electric-950 via-electric-900 to-electric-800 pb-24 pt-16 md:pb-32 md:pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] translate-x-[-30%] translate-y-[-30%] rounded-full bg-electric-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-[30%] translate-y-[30%] rounded-full bg-electric-400/20 blur-3xl"></div>
        <div className="absolute bottom-1/2 right-1/3 h-64 w-64 rounded-full bg-electric-600/30 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxZjI5MzciIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="mx-auto mb-12 max-w-lg md:mx-0">
          <div className="inline-flex animate-fade-in items-center rounded-full bg-electric-500/10 px-4 py-2 text-sm font-medium text-electric-400 backdrop-blur-sm">
            <Zap size={16} className="mr-2" />
            Профессиональные электромонтажные работы
          </div>
        </div>
        
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8 text-white">
            <h1 className="animate-fade-in font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Современные электрические <span className="text-electric-400">решения</span> для вашего дома
            </h1>
            
            <p className="animate-fade-in text-lg text-white/80 md:text-xl">
              Полный комплекс услуг по электромонтажу для квартир, частных домов и коммерческих помещений. Безопасность, надежность и профессионализм.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-electric-500 text-white hover:bg-electric-600"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Связаться с нами
              </Button>
              <Button 
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                size="lg" 
                variant="outline"
                className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
              >
                Наши услуги
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white/90">Гарантия 3 года</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white/90">Работаем 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white/90">Выезд за 30 минут</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-2xl bg-electric-500/30 shadow-lg"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Электрик выполняет профессиональную установку" 
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-electric-500 text-white">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Сертифицированные специалисты</h3>
                    <p className="text-sm text-white/80">С опытом работы от 5 лет</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
