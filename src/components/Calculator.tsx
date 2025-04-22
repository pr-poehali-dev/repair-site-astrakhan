import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator as CalcIcon } from "lucide-react";

interface ServicePrice {
  name: string;
  pricePerUnit: number;
  unit: string;
}

const servicePrices: ServicePrice[] = [
  { name: "Замена электропроводки", pricePerUnit: 550, unit: "м²" },
  { name: "Установка розетки/выключателя", pricePerUnit: 350, unit: "шт" },
  { name: "Монтаж люстры/светильника", pricePerUnit: 600, unit: "шт" },
  { name: "Сборка электрощита", pricePerUnit: 3500, unit: "шт" },
  { name: "Штробление стен", pricePerUnit: 300, unit: "м" },
  { name: "Прокладка кабеля", pricePerUnit: 150, unit: "м" },
];

const Calculator = () => {
  const [service, setService] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  
  const selectedService = servicePrices.find(s => s.name === service);
  
  const calculatePrice = () => {
    if (selectedService && quantity > 0) {
      setTotalPrice(selectedService.pricePerUnit * quantity);
    } else {
      setTotalPrice(null);
    }
  };
  
  const resetCalculator = () => {
    setService("");
    setQuantity(1);
    setTotalPrice(null);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50" id="calculator">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Калькулятор стоимости</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Рассчитайте примерную стоимость электромонтажных работ для вашего объекта
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalcIcon className="mr-2 text-blue-600" size={24} />
                Расчет стоимости работ
              </CardTitle>
              <CardDescription>
                Выберите услугу и укажите необходимый объем работ
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="service">Выберите услугу</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicePrices.map((service) => (
                      <SelectItem key={service.name} value={service.name}>
                        {service.name} ({service.pricePerUnit} ₽/{service.unit})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quantity">
                  Количество ({selectedService ? selectedService.unit : "ед."})
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                />
              </div>
              
              <div className="flex space-x-2 pt-4">
                <Button onClick={calculatePrice} className="flex-1">
                  Рассчитать
                </Button>
                <Button variant="outline" onClick={resetCalculator}>
                  Сбросить
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">Результат расчета</h3>
            
            {totalPrice !== null ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Услуга</p>
                    <p className="font-medium">{service}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Количество</p>
                    <p className="font-medium">{quantity} {selectedService?.unit}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-md text-center">
                  <p className="text-gray-700 mb-2">Примерная стоимость:</p>
                  <p className="text-3xl font-bold text-blue-600">{totalPrice} ₽</p>
                  <p className="text-xs text-gray-500 mt-2">
                    *Окончательная стоимость может отличаться после осмотра объекта
                  </p>
                </div>
                
                <Button onClick={scrollToForm} className="w-full">
                  Оставить заявку
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-4 py-8">
                <p className="text-gray-500">
                  Выберите услугу и укажите количество для расчета примерной стоимости
                </p>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <CalcIcon size={32} className="text-blue-600" />
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-10 bg-blue-50 p-4 rounded-lg">
          <p className="text-center text-sm text-gray-600">
            Точная стоимость определяется после выезда специалиста и зависит от сложности работ, 
            состояния объекта и используемых материалов
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
