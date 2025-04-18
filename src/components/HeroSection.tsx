import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, LineChart, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-ai-blue text-white shadow hover:bg-ai-blue/80">
            <span>Новое поколение продаж</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl text-gray-900">
            Превратите <span className="text-ai-blue">входящие заявки</span> в <span className="text-ai-purple">продажи</span> с помощью ИИ
          </h1>
          
          <p className="text-gray-600 md:text-xl max-w-[42rem]">
            Автоматический анализ и квалификация лидов, интеллектуальное распределение заявок и персонализированные скрипты продаж
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
            <Button className="bg-ai-blue hover:bg-ai-purple shadow-lg text-white">
              Попробовать бесплатно
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Запросить демо
            </Button>
          </div>
          
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl">
            <div className="flex flex-col items-center p-4 border rounded-lg bg-white shadow-sm">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-ai-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ИИ-анализ лидов</h3>
              <p className="text-sm text-gray-600 text-center">Автоматическая квалификация и оценка потенциала клиентов</p>
            </div>
            
            <div className="flex flex-col items-center p-4 border rounded-lg bg-white shadow-sm">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-ai-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Умное распределение</h3>
              <p className="text-sm text-gray-600 text-center">Направление лидов оптимальным менеджерам по продажам</p>
            </div>
            
            <div className="flex flex-col items-center p-4 border rounded-lg bg-white shadow-sm">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-ai-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Детальная аналитика</h3>
              <p className="text-sm text-gray-600 text-center">Анализ эффективности и оптимизация процесса продаж</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;