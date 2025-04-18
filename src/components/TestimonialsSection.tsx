import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Благодаря ИИ-системе автоматизации продаж мы смогли увеличить конверсию входящих лидов на 43% и сократить время обработки заявок на 64%.",
    author: "Александр Петров",
    role: "Директор по продажам, ТехноСтар",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Система точно определяет потенциал клиентов и распределяет их между нашими менеджерами. Это значительно повысило эффективность отдела продаж.",
    author: "Елена Смирнова",
    role: "Руководитель отдела маркетинга, Инновации+",
    avatar: "/placeholder.svg"
  },
  {
    quote: "Персонализированные скрипты продаж, которые генерирует ИИ, действительно работают! Наши менеджеры теперь закрывают сделки быстрее и с лучшими показателями.",
    author: "Дмитрий Иванов",
    role: "CEO, ПрогрессМаркет",
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, как наше ИИ-решение для автоматизации продаж помогает бизнесам повышать эффективность
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 text-ai-blue">❝</div>
                <p className="mb-6 text-gray-700">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-ai-blue text-white">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;