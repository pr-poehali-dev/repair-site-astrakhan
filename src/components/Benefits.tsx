import { ShieldCheck, Clock, BadgeCheck, Wrench, UserCheck, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Гарантия качества",
      description: "Все работы выполняются в соответствии с ПУЭ. Предоставляем гарантию на работы до 3 лет."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Оперативность",
      description: "Выезжаем на объект в течение 30 минут после звонка. Работаем без выходных 24/7."
    },
    {
      icon: <BadgeCheck className="h-8 w-8" />,
      title: "Сертифицированные специалисты",
      description: "В нашей команде только опытные электрики с профильным образованием и сертификатами."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Современное оборудование",
      description: "Используем профессиональный инструмент и новейшие технологии для безупречного результата."
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Персональный подход",
      description: "Разрабатываем индивидуальные решения под потребности каждого клиента."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Комплексные решения",
      description: "От проектирования до финальной реализации и сдачи объекта «под ключ»."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-electric-100 px-4 py-1.5 text-sm font-medium text-electric-800">
            Почему выбирают нас
          </span>
          <h2 className="gradient-heading mb-6 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Преимущества работы с нами
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-muted-foreground">
            Мы стремимся к безупречному качеству и полной безопасности ваших электросистем.
            Доверьтесь профессионалам с многолетним опытом.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group animate-fade-in rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-lg dark:bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="benefits-icon mb-6 group-hover:text-electric-700">
                {benefit.icon}
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
