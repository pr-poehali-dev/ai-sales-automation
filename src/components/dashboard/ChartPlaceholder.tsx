import { LucideIcon } from "lucide-react";

interface ChartPlaceholderProps {
  icon: React.ReactNode;
  text: string;
  height?: string;
}

const ChartPlaceholder = ({ icon, text, height = "h-64" }: ChartPlaceholderProps) => {
  return (
    <div className={`flex items-center justify-center ${height} border border-dashed rounded-md text-gray-400`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default ChartPlaceholder;