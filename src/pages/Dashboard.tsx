import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCards from "@/components/dashboard/StatCards";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import NotificationsAndTasks from "@/components/dashboard/NotificationsAndTasks";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <main className="p-4 md:p-8">
          {/* Заголовок и кнопка */}
          <DashboardHeader />
          
          {/* Статистика по карточкам */}
          <StatCards />
          
          {/* Табы с разными представлениями данных */}
          <DashboardTabs />
          
          {/* Уведомления и задачи */}
          <NotificationsAndTasks />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;