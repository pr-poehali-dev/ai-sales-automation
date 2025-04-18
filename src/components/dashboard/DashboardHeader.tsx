import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Дашборд</h1>
        <p className="text-gray-600">Обзор ваших продаж и лидов</p>
      </div>
      <div className="mt-4 md:mt-0">
        <Button className="bg-ai-blue hover:bg-ai-purple">
          Сгенерировать отчет
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;