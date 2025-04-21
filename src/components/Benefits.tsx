import { Check, Clock, Star, Shield } from "lucide-react";

type BenefitProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BenefitCard = ({ icon, title, description }: BenefitProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <Check size={24} />,
      title: "Гарантия качества",
      description: "Мы даём гарантию на все виды выполненных работ до 3 лет"
    },
    {
      icon: <Clock size={24} />,
      title: "Точные сроки",
      description: "Выполняем работу строго в согласованные сроки без задержек"
    },
    {
      icon: <Star size={24} />,
      title: "Опытные мастера",
      description: "Наши специалисты имеют более 10 лет опыта в сфере ремонта"
    },
    {
      icon: <Shield size={24} />,
      title: "Фиксированная цена",
      description: "Стоимость не изменится после начала работ - никаких доплат"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50" id="benefits">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Преимущества работы с нами</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Выбирая нашу компанию, вы получаете не только качественный ремонт, 
            но и целый ряд дополнительных преимуществ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
