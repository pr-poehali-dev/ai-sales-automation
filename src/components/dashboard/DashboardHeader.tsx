import { Button } from "@/components/ui/button";
import UserDropdown from "./UserDropdown";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Дашборд</h1>
        <p className="text-gray-600">Обзор ваших продаж и лидов</p>
      </div>
      <div className="mt-4 md:mt-0 flex items-center space-x-4">
        <Button className="bg-ai-blue hover:bg-ai-purple">
          Сгенерировать отчет
        </Button>
        <UserDropdown />
      </div>
    </div>
  );
};

export default DashboardHeader;