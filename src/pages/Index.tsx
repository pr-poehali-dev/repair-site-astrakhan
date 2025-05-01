
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center border border-white/20">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-white font-display">Сайт недоступен</h1>
        <p className="text-gray-300 mb-8">
          В настоящее время сайт находится на техническом обслуживании. 
          Мы вернемся в ближайшее время с новым дизайном и функционалом.
        </p>
        <Button 
          onClick={() => navigate("/")} 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
        >
          Обновить страницу
        </Button>
        
        <div className="mt-12 text-gray-400 text-sm">
          © {new Date().getFullYear()} Все права защищены
        </div>
      </div>
    </div>
  );
}
