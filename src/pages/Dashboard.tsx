import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Users, 
  BarChart3, 
  PieChart, 
  TrendingUp,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <main className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Дашборд</h1>
              <p className="text-gray-600">Обзор ваших продаж и лидов</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-ai-blue hover:bg-ai-purple">
                Сгенерировать отчет
              </Button>
            </div>
          </div>
          
          {/* Статистика по карточкам */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Новые лиды</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">127</div>
                  <div className="flex items-center text-green-600 text-sm">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>+12.5%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-1">За последние 7 дней</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Конверсия в продажи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">32.8%</div>
                  <div className="flex items-center text-green-600 text-sm">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>+4.3%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-1">В среднем за месяц</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Средний чек</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">32 450 ₽</div>
                  <div className="flex items-center text-red-600 text-sm">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    <span>-2.1%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-1">В этом месяце</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Выручка</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">1.2M ₽</div>
                  <div className="flex items-center text-green-600 text-sm">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>+18.2%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-1">За текущий квартал</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Табы с разными представлениями данных */}
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="leads">Лиды</TabsTrigger>
              <TabsTrigger value="sales">Продажи</TabsTrigger>
              <TabsTrigger value="team">Команда</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Динамика продаж</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <div className="flex items-center justify-center h-full border border-dashed rounded-md text-gray-400">
                      <BarChart3 className="h-12 w-12 mr-4" />
                      <span>График динамики продаж</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Источники лидов</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <div className="flex items-center justify-center h-full border border-dashed rounded-md text-gray-400">
                      <PieChart className="h-12 w-12 mr-4" />
                      <span>Диаграмма источников</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="leads" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Анализ входящих лидов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 border border-dashed rounded-md text-gray-400">
                    <Users className="h-12 w-12 mr-4" />
                    <span>Данные по лидам будут здесь</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sales" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Отчет по продажам</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 border border-dashed rounded-md text-gray-400">
                    <TrendingUp className="h-12 w-12 mr-4" />
                    <span>Данные по продажам будут здесь</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Эффективность команды</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 border border-dashed rounded-md text-gray-400">
                    <User className="h-12 w-12 mr-4" />
                    <span>Данные по команде будут здесь</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Уведомления и задачи */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Последние уведомления</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Новый высокоприоритетный лид</h4>
                      <p className="text-sm text-gray-600">ООО "ТехноПром" интересуется вашим продуктом</p>
                      <p className="text-xs text-gray-500 mt-1">2 часа назад</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Увеличение конверсии</h4>
                      <p className="text-sm text-gray-600">Конверсия выросла на 15% за последнюю неделю</p>
                      <p className="text-xs text-gray-500 mt-1">Вчера</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Новый менеджер добавлен</h4>
                      <p className="text-sm text-gray-600">Екатерина Смирнова теперь в вашей команде</p>
                      <p className="text-xs text-gray-500 mt-1">2 дня назад</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Задачи на сегодня</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 mr-3 text-ai-blue" />
                    <div>
                      <h4 className="text-sm font-medium">Связаться с ООО "ТехноПром"</h4>
                      <p className="text-xs text-gray-500">Высокий приоритет • Срок: Сегодня 16:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 mr-3 text-ai-blue" />
                    <div>
                      <h4 className="text-sm font-medium">Подготовить коммерческое предложение</h4>
                      <p className="text-xs text-gray-500">Средний приоритет • Срок: Сегодня 17:30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 mr-3 text-ai-blue" />
                    <div>
                      <h4 className="text-sm font-medium">Провести онлайн-демонстрацию</h4>
                      <p className="text-xs text-gray-500">Средний приоритет • Срок: Сегодня 15:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;