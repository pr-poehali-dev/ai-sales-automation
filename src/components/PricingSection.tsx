import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Стартовый",
    price: "9 900",
    description: "Идеально для малого бизнеса и индивидуальных предпринимателей",
    features: [
      "До 500 лидов в месяц",
      "Базовая ИИ-квалификация",
      "2 интеграции с CRM",
      "Стандартные отчеты",
      "Техподдержка в рабочие часы"
    ],
    cta: "Начать бесплатный период",
    highlighted: false
  },
  {
    name: "Бизнес",
    price: "24 900",
    description: "Оптимальное решение для растущих компаний со средним объемом продаж",
    features: [
      "До 2000 лидов в месяц",
      "Расширенная ИИ-квалификация",
      "Интеграция с любыми CRM",
      "Персонализированные скрипты продаж",
      "Продвинутая аналитика",
      "Приоритетная поддержка 24/7"
    ],
    cta: "Начать бесплатный период",
    highlighted: true
  },
  {
    name: "Корпоративный",
    price: "По запросу",
    description: "Комплексное решение для крупного бизнеса с высоким объемом продаж",
    features: [
      "Неограниченное количество лидов",
      "Премиум ИИ-функции",
      "Кастомная интеграция",
      "Выделенный менеджер",
      "SLA с гарантированным уровнем обслуживания",
      "Обучение команды"
    ],
    cta: "Связаться с нами",
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Простые и прозрачные тарифы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий план для вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border shadow-sm h-full flex flex-col ${
                plan.highlighted 
                  ? 'border-ai-blue shadow-md relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-ai-blue before:pointer-events-none'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-ai-blue text-white text-sm font-medium py-1 px-3 rounded-full">
                  Популярный выбор
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2 mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "По запросу" && <span className="text-gray-600 ml-1">₽/мес</span>}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-ai-blue shrink-0 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-ai-blue hover:bg-ai-purple' 
                      : 'bg-white text-ai-blue border border-ai-blue hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600">
            Нужно индивидуальное решение? <a href="#" className="text-ai-blue font-medium">Свяжитесь с нашим отделом продаж</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;