
import { useState } from "react";
import { Phone, Mail, MapPin, Zap, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", message: "" });
      
      // Reset submission state after a delay
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary">
              <MessageSquare size={16} className="mr-2" />
              Обратная связь
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Свяжитесь с нами для <span className="heading-gradient">бесплатной консультации</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время для консультации и расчета стоимости работ.
            </p>
            
            <div className="space-y-8 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                  <p className="text-gray-600 dark:text-gray-300">+7 800 555 3535</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ежедневно с 9:00 до 20:00</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@electromaster.ru</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ответим в течение нескольких часов</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Адрес</h3>
                  <p className="text-gray-600 dark:text-gray-300">г. Москва, ул. Электрическая, 42</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Работаем по всему городу и области</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-700">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Срочный вызов электрика</h3>
                  <p className="text-gray-600 dark:text-gray-300">Выезд мастера в течение 60 минут</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 dark:bg-gray-700">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-green-900/30 dark:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Заявка успешно отправлена!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Ваше имя*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Номер телефона*
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите требуемые работы или задайте вопрос"
                    className="w-full h-32 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
