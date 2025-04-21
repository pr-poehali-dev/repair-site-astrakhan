import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Качественный ремонт квартир в Астрахани
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Профессиональный ремонт квартир, домов и офисов под ключ. 
              От косметического до капитального.
            </p>
            <div>
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Оставить заявку
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-blue-500 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-900 rounded-lg"></div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Современная отремонтированная светлая комната с дизайнерской отделкой" 
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
