import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
    
    console.log(values);
    form.reset();
  }

  return (
    <section className="py-16 px-4 bg-white" id="contact-form">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Оставьте заявку на ремонт</h2>
            <p className="text-lg text-gray-600 mb-6">
              Заполните форму, и наш специалист свяжется с вами для консультации и составления сметы
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mt-1">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Оставьте заявку</h3>
                  <p className="text-gray-600">Заполните форму справа с вашими контактными данными</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mt-1">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Выезд на объект</h3>
                  <p className="text-gray-600">Наш специалист приедет на объект для оценки объема работ</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mt-1">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Составление сметы</h3>
                  <p className="text-gray-600">Составим детальную смету с указанием стоимости и сроков</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваше имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Иванов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Номер телефона</FormLabel>
                      <FormControl>
                        <Input placeholder="+7 (___) ___-__-__" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Дополнительная информация</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Опишите примерный объем работ, пожелания..." 
                          {...field} 
                          className="min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full mt-4" size="lg">
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
