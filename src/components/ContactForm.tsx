import { useState } from "react";
import { Phone, Mail, MessageSquare, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" className="relative section-padding overflow-hidden bg-electric-950 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] translate-x-1/2 translate-y-[-50%] rounded-full bg-electric-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-electric-600/20 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxZjI5MzciIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-electric-500/20 text-electric-400">
            <Zap size={30} />
          </div>
          <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-white/80">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время для консультации и расчета стоимости работ
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <div className="mb-10 space-y-10">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-electric-500/20 text-electric-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Телефон для связи</h3>
                    <p className="mb-1 text-lg text-white/80">+7 923 456 7890</p>
                    <p className="text-sm text-white/60">Ежедневно с 8:00 до 22:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-electric-500/20 text-electric-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Email</h3>
                    <p className="mb-1 text-lg text-white/80">electro-pro@example.com</p>
                    <p className="text-sm text-white/60">Отвечаем в течение 2 часов</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-electric-500/20 text-electric-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Зона обслуживания</h3>
                    <p className="mb-1 text-lg text-white/80">Город и область</p>
                    <p className="text-sm text-white/60">Выезд в пригород и соседние районы</p>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 rounded-2xl bg-electric-900/50 p-6 backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-3xl font-bold text-electric-400">5+</p>
                  <p className="text-sm text-white/70">Лет опыта</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-electric-400">1000+</p>
                  <p className="text-sm text-white/70">Проектов</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-electric-400">100%</p>
                  <p className="text-sm text-white/70">Гарантия</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    required
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:border-electric-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                    Номер телефона
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:border-electric-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                    Сообщение (опционально)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите требуемые работы или задайте вопрос"
                    className="h-32 resize-none border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:border-electric-400"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-electric-500 text-white hover:bg-electric-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-center text-xs text-white/60">
                  Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности и даете согласие на обработку персональных данных.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
