import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NotificationItem from "./NotificationItem";
import { AlertCircle, TrendingUp, Users } from "lucide-react";

const NotificationsCard = () => {
  const notifications = [
    {
      icon: <AlertCircle className="h-5 w-5" />,
      iconColor: "text-amber-500",
      title: "Новый высокоприоритетный лид",
      description: 'ООО "ТехноПром" интересуется вашим продуктом',
      time: "2 часа назад"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      iconColor: "text-green-500",
      title: "Увеличение конверсии",
      description: "Конверсия выросла на 15% за последнюю неделю",
      time: "Вчера"
    },
    {
      icon: <Users className="h-5 w-5" />,
      iconColor: "text-blue-500",
      title: "Новый менеджер добавлен",
      description: "Екатерина Смирнова теперь в вашей команде",
      time: "2 дня назад"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Последние уведомления</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              icon={notification.icon}
              iconColor={notification.iconColor}
              title={notification.title}
              description={notification.description}
              time={notification.time}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsCard;