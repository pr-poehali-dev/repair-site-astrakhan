import { ShieldCheck, Clock, Zap, Award } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-16 bg-gray-50" id="benefits">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Преимущества работы с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем профессиональные услуги электромонтажа с гарантией качества
            и полным соблюдением всех норм безопасности
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
            <p className="text-gray-600">
              На все выполненные работы предоставляем официальную гарантию сроком до 5 лет
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Оперативность</h3>
            <p className="text-gray-600">
              Выполняем работы точно в срок с соблюдением всех технических требований
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
            <p className="text-gray-600">
              В нашей команде только опытные электрики с профильным образованием
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Современные технологии</h3>
            <p className="text-gray-600">
              Используем только качественные материалы и современное оборудование
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
