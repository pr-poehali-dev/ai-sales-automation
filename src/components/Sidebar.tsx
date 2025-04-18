import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  MessageSquare, 
  Calendar, 
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const routes = [
    {
      label: "Дашборд",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
      active: location.pathname === "/dashboard",
    },
    {
      label: "Лиды",
      icon: <Users className="h-5 w-5" />,
      href: "/leads",
      active: location.pathname === "/leads",
    },
    {
      label: "Аналитика",
      icon: <BarChart3 className="h-5 w-5" />,
      href: "/analytics",
      active: location.pathname === "/analytics",
    },
    {
      label: "Чаты с клиентами",
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/chats",
      active: location.pathname === "/chats",
    },
    {
      label: "Календарь",
      icon: <Calendar className="h-5 w-5" />,
      href: "/calendar",
      active: location.pathname === "/calendar",
    },
    {
      label: "Настройки",
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
      active: location.pathname === "/settings",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Мобильная кнопка для отображения сайдбара */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleMobileMenu}
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      
      {/* Сайдбар */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-sidebar-background border-r border-sidebar-border transition-transform duration-300 md:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${className}`}
      >
        <div className="flex flex-col h-full">
          {/* Логотип */}
          <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-ai-blue">АИ<span className="text-ai-purple">Продажи</span></span>
            </Link>
          </div>
          
          {/* Навигация по приложению */}
          <ScrollArea className="flex-1 py-4">
            <nav className="px-2 space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  to={route.href}
                  className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    route.active 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {route.icon}
                  <span className="ml-3">{route.label}</span>
                </Link>
              ))}
            </nav>
          </ScrollArea>
          
          {/* Секция помощи */}
          <div className="p-4 border-t border-sidebar-border">
            <Link 
              to="/help" 
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-sidebar-accent/50"
              onClick={() => setIsMobileOpen(false)}
            >
              <HelpCircle className="h-5 w-5" />
              <span className="ml-3">Справка и поддержка</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;