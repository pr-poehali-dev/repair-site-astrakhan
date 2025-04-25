import { Button } from "@/components/ui/button";

const Services = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выполняем полный комплекс электромонтажных работ для жилых и коммерческих помещений
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582731595896-1fcad083df15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Замена электропроводки" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Замена электропроводки</h3>
              <p className="text-gray-600 mb-4">
                Полная или частичная замена старой проводки с соблюдением всех норм безопасности
              </p>
              <Button variant="outline" onClick={scrollToForm} className="w-full">
                Заказать услугу
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558389186-a6d803b64fb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Установка розеток и выключателей" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Установка розеток и выключателей</h3>
              <p className="text-gray-600 mb-4">
                Монтаж, замена и перенос розеток, выключателей и других электроточек
              </p>
              <Button variant="outline" onClick={scrollToForm} className="w-full">
                Заказать услугу
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Монтаж электрощитов" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Монтаж электрощитов</h3>
              <p className="text-gray-600 mb-4">
                Сборка, установка и подключение электрощитов любой сложности
              </p>
              <Button variant="outline" onClick={scrollToForm} className="w-full">
                Заказать услугу
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565347878134-020b568aee26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Монтаж освещения" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Монтаж освещения</h3>
              <p className="text-gray-600 mb-4">
                Установка светильников, люстр, подсветки и декоративного освещения
              </p>
              <Button variant="outline" onClick={scrollToForm} className="w-full">
                Заказать услугу
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583089892943-c13be20f9fd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Электромонтаж в новостройке" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Электромонтаж в новостройке</h3>
              <p className="text-gray-600 mb-4">
                Полный комплекс работ по электрификации новых помещений под ключ
              </p>
              <Button variant="outline" onClick={scrollToForm} className="w-full">
                Заказать услугу
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Устранение неисправностей" 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Устранение неисправностей</h3>
              <p className="text-gray-600 mb-4">
                Диагностика и ремонт неисправностей в электросети, поиск замыканий
              </p>
              <Button variant="outline" onClick={scrollToForm} className="w-full">
                Заказать услугу
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
