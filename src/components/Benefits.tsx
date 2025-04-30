import { Shield, Clock, Award, CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Гарантия на все работы",
      description: "Мы предоставляем полную гарантию на все выполненные электромонтажные работы сроком до 3-х лет."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Оперативное выполнение",
      description: "Выполняем работы строго в оговоренные сроки без задержек и переносов."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Профессиональные электрики",
      description: "Наши специалисты имеют профильное образование и многолетний опыт работы."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Качественные материалы",
      description: "Используем только сертифицированные материалы от проверенных производителей."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы делаем все необходимое, чтобы обеспечить высокое качество электромонтажных работ и сервиса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 card-shadow hover-scale">
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
