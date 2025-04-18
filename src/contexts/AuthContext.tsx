import React, { createContext, useContext, useState, useEffect } from "react";

// Типы пользователя и контекста аутентификации
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Создаем контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Хук для использования контекста аутентификации
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
}

// Провайдер контекста аутентификации
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Проверка наличия пользователя при загрузке
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Функция для аутентификации пользователя
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // В реальном приложении здесь был бы API-запрос
      // Имитация задержки сети
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Проверка учетных данных (для демонстрации)
      if (email === "admin@example.com" && password === "password") {
        const userData: User = {
          id: "1",
          name: "Администратор",
          email: "admin@example.com",
          role: "admin"
        };
        
        // Сохраняем пользователя в localStorage и состоянии
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
      } else {
        throw new Error("Неверный email или пароль");
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для выхода из системы
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
