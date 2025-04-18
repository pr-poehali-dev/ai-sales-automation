import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  period: string;
}

const StatCard = ({ title, value, change, period }: StatCardProps) => {
  const ChangeIcon = change.isPositive ? ArrowUpRight : ArrowDownRight;
  const changeColor = change.isPositive ? "text-green-600" : "text-red-600";

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">{value}</div>
          <div className={`flex items-center ${changeColor} text-sm`}>
            <ChangeIcon className="h-4 w-4 mr-1" />
            <span>{change.value}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">{period}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;