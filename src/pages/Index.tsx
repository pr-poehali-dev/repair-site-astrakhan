
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Index() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    // Автоматическая анимация
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // Обратный отсчет
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);
  
  const handleRefresh = () => {
    navigate(0);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden relative">
      {/* Анимированные фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl -top-64 -left-64 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl -bottom-64 -right-64 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-pink-600/20 blur-3xl top-1/3 left-2/3 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Псевдо-звезды */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 2}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Центральная карточка */}
      <div className="relative z-10 max-w-lg w-full p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl">
        <div className="flex items-center justify-center mb-6">
          <div className={`relative w-24 h-24 ${animationStep === 0 ? 'scale-110' : ''} transition-all duration-700`}>
            {/* Анимированный логотип */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ${animationStep === 1 ? 'scale-110' : 'scale-100'} transition-all duration-700`}></div>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform rotate-45 ${animationStep === 2 ? 'scale-90' : 'scale-80'} transition-all duration-700`}></div>
            <div className={`absolute inset-0 rounded-full bg-black flex items-center justify-center ${animationStep === 3 ? 'scale-70' : 'scale-65'} transition-all duration-700`}>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">404</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Сайт на реконструкции
          </span>
        </h1>
        
        <div className="mb-8 space-y-6">
          <p className="text-lg text-center text-white/80 leading-relaxed">
            Мы создаём для вас нечто невероятное. Скоро вернёмся с обновлённым дизайном и расширенным функционалом.
          </p>
          
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg className="absolute inset-0 animate-spin-slow" width="128" height="128" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="60" fill="none" stroke="url(#grad1)" strokeWidth="4" strokeDasharray="376.8 376.8" transform="rotate(-90 64 64)" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">{counter}</span>
              </div>
            </div>
            <p className="mt-4 text-white/60">
              Автоматическое обновление через {counter} {
                counter === 1 ? 'секунду' : 
                counter > 1 && counter < 5 ? 'секунды' : 'секунд'
              }
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleRefresh} 
            className="px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Обновить сейчас
          </Button>
        </div>
      </div>
      
      <div className="relative z-10 mt-12 text-white/40 text-sm">
        © {new Date().getFullYear()} Все права защищены
      </div>
      
      {/* Функциональность автоматического обновления */}
      {counter === 0 && setTimeout(() => navigate(0), 100)}
    </div>
  );
}
