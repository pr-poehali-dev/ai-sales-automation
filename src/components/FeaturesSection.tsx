import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Target, Layers, UserCheck, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-ai-blue" />,
    title: "ИИ-квалификация лидов",
    description: "Автоматически определяйте потенциал и готовность клиента к покупке на основе всех доступных данных"
  },
  {
    icon: <Target className="h-10 w-10 text-ai-purple" />,
    title: "Точное распределение заявок",
    description: "Умная система распределяет лиды между менеджерами с учетом их опыта, загруженности и компетенций"
  },
  {
    icon: <Layers className="h-10 w-10 text-ai-teal" />,
    title: "Интеграция с CRM",
    description: "Бесшовная интеграция с популярными CRM-системами для синхронизации всех данных о клиентах"
  },
  {
    icon: <UserCheck className="h-10 w-10 text-ai-blue" />,
    title: "Персонализированные скрипты",
    description: "ИИ создает оптимальные скрипты продаж на основе анализа предпочтений и потребностей клиента"
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-ai-purple" />,
    title: "Автоматизация коммуникаций",
    description: "Настройте автоматические ответы по email, SMS и мессенджерам для оперативной связи с клиентами"
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-ai-teal" />,
    title: "Продвинутая аналитика",
    description: "Получайте глубокие отчеты об эффективности продаж и конверсии на каждом этапе воронки"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Функциональность платформы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наша система использует передовые алгоритмы искусственного интеллекта для максимизации эффективности ваших продаж
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-3">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;