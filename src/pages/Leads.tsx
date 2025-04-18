import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  ArrowDownUp, 
  MoreHorizontal,
  MessageSquare,
  Phone,
  Mail,
  Calendar
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Тестовые данные лидов
const leads = [
  {
    id: "LD-1234",
    name: "Иван Петров",
    company: "ООО 'ТехноПром'",
    email: "petrov@technoprom.ru",
    phone: "+7 (999) 123-45-67",
    source: "Сайт",
    score: 92,
    status: "new",
    date: "2023-10-15T10:23:00",
    avatar: "/placeholder.svg"
  },
  {
    id: "LD-1235",
    name: "Елена Смирнова",
    company: "ИП Смирнова Е.А.",
    email: "smirnova@mail.ru",
    phone: "+7 (999) 234-56-78",
    source: "Реклама",
    score: 78,
    status: "contacted",
    date: "2023-10-14T14:30:00",
    avatar: "/placeholder.svg"
  },
  {
    id: "LD-1236",
    name: "Алексей Иванов",
    company: "АО 'СтройИнвест'",
    email: "ivanov@stroyinvest.ru",
    phone: "+7 (999) 345-67-89",
    source: "Партнеры",
    score: 65,
    status: "negotiation",
    date: "2023-10-13T09:15:00",
    avatar: "/placeholder.svg"
  },
  {
    id: "LD-1237",
    name: "Ольга Козлова",
    company: "ООО 'МедикаПлюс'",
    email: "kozlova@medikaplus.ru",
    phone: "+7 (999) 456-78-90",
    source: "Звонок",
    score: 88,
    status: "qualified",
    date: "2023-10-12T16:45:00",
    avatar: "/placeholder.svg"
  },
  {
    id: "LD-1238",
    name: "Дмитрий Новиков",
    company: "ЗАО 'АвтоТранс'",
    email: "novikov@avtotrans.ru",
    phone: "+7 (999) 567-89-01",
    source: "Выставка",
    score: 53,
    status: "unqualified",
    date: "2023-10-11T11:10:00",
    avatar: "/placeholder.svg"
  }
];

// Функция для отображения иконки и цвета статуса
const getStatusBadge = (status: string) => {
  const statusMap: {[key: string]: { label: string; variant: "default" | "outline" | "secondary" | "destructive" }} = {
    new: { label: "Новый", variant: "default" },
    contacted: { label: "Связались", variant: "secondary" },
    qualified: { label: "Квалифицирован", variant: "default" },
    negotiation: { label: "На переговорах", variant: "outline" },
    unqualified: { label: "Не квалифицирован", variant: "destructive" }
  };
  
  return statusMap[status] || { label: status, variant: "default" };
};

// Функция для отображения оценки лида
const getLeadScoreBadge = (score: number) => {
  if (score >= 80) return <span className="text-green-600 font-medium">{score}/100</span>;
  if (score >= 60) return <span className="text-amber-600 font-medium">{score}/100</span>;
  return <span className="text-red-600 font-medium">{score}/100</span>;
};

const Leads = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <main className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Управление лидами</h1>
              <p className="text-gray-600">Отслеживайте и управляйте вашими потенциальными клиентами</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-ai-blue hover:bg-ai-purple">
                Добавить лид
              </Button>
            </div>
          </div>
          
          {/* Статистика по карточкам */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Всего лидов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">847</div>
                <p className="text-gray-600 text-sm mt-1">За последние 30 дней</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Квалифицированные</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">368</div>
                <p className="text-gray-600 text-sm mt-1">43.4% от общего числа</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">В работе</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">215</div>
                <p className="text-gray-600 text-sm mt-1">На разных этапах</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Требуют внимания</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-600">27</div>
                <p className="text-gray-600 text-sm mt-1">Высокоприоритетные лиды</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Фильтры и поиск */}
          <Card className="mb-8">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input placeholder="Поиск лидов..." className="pl-8" />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Фильтры
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowDownUp className="h-4 w-4" />
                    Сортировка
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Таблица лидов */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Все лиды</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Клиент</TableHead>
                    <TableHead>Оценка ИИ</TableHead>
                    <TableHead>Источник</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Последнее изменение</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={lead.avatar} alt={lead.name} />
                            <AvatarFallback className="bg-ai-blue text-white">
                              {lead.name.split(' ').map(name => name[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{lead.name}</div>
                            <div className="text-sm text-gray-500">{lead.company}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getLeadScoreBadge(lead.score)}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Badge variant="outline">{lead.source}</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadge(lead.status).variant}>
                          {getStatusBadge(lead.status).label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {new Date(lead.date).toLocaleDateString('ru-RU')}
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(lead.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" title="Написать">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Позвонить">
                            <Phone className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Отправить email">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Запланировать">
                            <Calendar className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Еще действия">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Leads;