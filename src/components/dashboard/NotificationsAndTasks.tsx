import NotificationsCard from "./NotificationsCard";
import TasksCard from "./TasksCard";

const NotificationsAndTasks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NotificationsCard />
      <TasksCard />
    </div>
  );
};

export default NotificationsAndTasks;