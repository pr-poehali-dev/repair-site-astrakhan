
import { Shield, Clock, Award, Users, BarChart, CheckCircle2 } from "lucide-react";

export default function About() {
  const advantages = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Гарантия качества",
      description: "Предоставляем гарантию до 5 лет на все выполненные работы."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Оперативность",
      description: "Выезжаем на объект в день обращения, работаем без выходных."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Сертифицированные мастера",
      description: "Наши электрики имеют профильное образование и большой опыт."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Индивидуальный подход",
      description: "Разрабатываем решения под конкретные задачи и бюджет клиента."
    }
  ];

  const stats = [
    { value: "10+", label: "лет опыта" },
    { value: "1500+", label: "завершенных проектов" },
    { value: "98%", label: "довольных клиентов" }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Почему клиенты <span className="heading-gradient">выбирают нас</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Мы предоставляем комплексные решения для всех типов электромонтажных работ.
              Наши специалисты обладают большим опытом и выполняют работы качественно и в срок.
            </p>
            
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 -m-4 rounded-3xl bg-primary/10 transform -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Наши работы по электромонтажу" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl shadow-md dark:bg-gray-700">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
              <h3 className="text-xl font-bold mb-4">Наши принципы работы</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200">Соблюдение всех норм ПУЭ и стандартов</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200">Использование высококачественных материалов</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200">Точное соблюдение сроков выполнения работ</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200">Прозрачное ценообразование без скрытых платежей</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
