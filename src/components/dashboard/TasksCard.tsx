import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TaskItem from "./TaskItem";

const TasksCard = () => {
  const tasks = [
    {
      title: 'Связаться с ООО "ТехноПром"',
      details: "Высокий приоритет • Срок: Сегодня 16:00"
    },
    {
      title: "Подготовить коммерческое предложение",
      details: "Средний приоритет • Срок: Сегодня 17:30"
    },
    {
      title: "Провести онлайн-демонстрацию",
      details: "Средний приоритет • Срок: Сегодня 15:00"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Задачи на сегодня</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              title={task.title}
              details={task.details}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TasksCard;