import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Косметический ремонт",
      description: "Быстрое обновление интерьера без серьезных перепланировок",
      features: ["Покраска стен", "Поклейка обоев", "Замена напольных покрытий", "Обновление сантехники"]
    },
    {
      title: "Капитальный ремонт",
      description: "Полное обновление квартиры с заменой коммуникаций",
      features: ["Перепланировка помещений", "Замена электропроводки", "Замена сантехнических труб", "Выравнивание стен и потолков"]
    },
    {
      title: "Ремонт под ключ",
      description: "Полный комплекс работ от проекта до финальной уборки",
      features: ["Разработка дизайн-проекта", "Закупка материалов", "Все виды отделочных работ", "Финальная уборка"]
    }
  ];

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
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем полный спектр услуг по ремонту квартир, домов и офисов в Астрахани
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToForm} 
                  variant="outline" 
                  className="w-full"
                >
                  Узнать стоимость
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
