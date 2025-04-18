interface TaskItemProps {
  title: string;
  details: string;
}

const TaskItem = ({ title, details }: TaskItemProps) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" className="h-4 w-4 mr-3 text-ai-blue" />
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-gray-500">{details}</p>
      </div>
    </div>
  );
};

export default TaskItem;