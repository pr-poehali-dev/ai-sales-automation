import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-ai-blue">АИ<span className="text-ai-purple">Продажи</span></h3>
            <p className="text-gray-600 mb-4">
              Автоматизация входящих продаж с использованием искусственного интеллекта
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-ai-blue">
                <span className="sr-only">VK</span>
                📱
              </a>
              <a href="#" className="text-gray-600 hover:text-ai-blue">
                <span className="sr-only">Telegram</span>
                📨
              </a>
              <a href="#" className="text-gray-600 hover:text-ai-blue">
                <span className="sr-only">WhatsApp</span>
                📞
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-ai-blue">Главная</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-ai-blue">Дашборд</Link>
              </li>
              <li>
                <Link to="/leads" className="text-gray-600 hover:text-ai-blue">Лиды</Link>
              </li>
              <li>
                <Link to="/analytics" className="text-gray-600 hover:text-ai-blue">Аналитика</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <address className="not-italic text-gray-600">
              <p>Email: info@ai-sales.ru</p>
              <p>Телефон: +7 (999) 123-45-67</p>
              <p>Адрес: г. Москва, ул. Технологическая, 42</p>
            </address>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} АИПродажи. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;