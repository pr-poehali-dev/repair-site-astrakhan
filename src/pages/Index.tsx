
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Сайт временно недоступен</h1>
        <p className="text-gray-600 mb-6">
          В настоящее время сайт находится на реконструкции. 
          Приносим извинения за временные неудобства.
        </p>
        <Button 
          onClick={() => navigate("/")} 
          className="bg-blue-500 hover:bg-blue-600"
        >
          Обновить страницу
        </Button>
      </div>
    </div>
  );
}
