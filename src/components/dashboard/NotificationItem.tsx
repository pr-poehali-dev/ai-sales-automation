import { LucideIcon } from "lucide-react";

interface NotificationItemProps {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
  time: string;
}

const NotificationItem = ({ icon, iconColor, title, description, time }: NotificationItemProps) => {
  return (
    <div className="flex items-start">
      <div className={`mr-4 mt-1 ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default NotificationItem;