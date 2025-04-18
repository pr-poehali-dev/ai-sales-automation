import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CircleUser, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`w-full fixed top-0 z-50 ${transparent ? "bg-transparent" : "bg-white shadow-sm"}`}>
      <div className="container flex justify-between items-center h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-ai-blue">АИ<span className="text-ai-purple">Продажи</span></span>
        </Link>
        
        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-ai-blue transition-colors">
            Главная
          </Link>
          <Link to="/dashboard" className="text-foreground hover:text-ai-blue transition-colors">
            Дашборд
          </Link>
          <Link to="/leads" className="text-foreground hover:text-ai-blue transition-colors">
            Лиды
          </Link>
          <Link to="/analytics" className="text-foreground hover:text-ai-blue transition-colors">
            Аналитика
          </Link>
          <Button variant="default" className="bg-ai-blue hover:bg-ai-purple">
            Попробовать бесплатно
          </Button>
          <Button variant="ghost" size="icon">
            <CircleUser className="h-5 w-5" />
          </Button>
        </nav>
        
        {/* Мобильное меню */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Мобильная навигация */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col py-4 px-6 space-y-3">
            <Link to="/" className="py-2 text-foreground hover:text-ai-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Главная
            </Link>
            <Link to="/dashboard" className="py-2 text-foreground hover:text-ai-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Дашборд
            </Link>
            <Link to="/leads" className="py-2 text-foreground hover:text-ai-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Лиды
            </Link>
            <Link to="/analytics" className="py-2 text-foreground hover:text-ai-blue transition-colors" onClick={() => setIsMenuOpen(false)}>
              Аналитика
            </Link>
            <Button variant="default" className="w-full bg-ai-blue hover:bg-ai-purple">
              Попробовать бесплатно
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;