import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-ai-blue to-ai-purple text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">
            Готовы увеличить продажи с помощью искусственного интеллекта?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            Попробуйте нашу платформу бесплатно в течение 14 дней и убедитесь в эффективности ИИ для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-ai-blue hover:bg-gray-100">
              Начать бесплатный период
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Запросить демонстрацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;