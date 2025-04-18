import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart,
  BarChart3,
  PieChart,
  LineChart,
  Download,
  Calendar
} from "lucide-react";

const Analytics = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <main className="p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Аналитика продаж</h1>
              <p className="text-gray-600">Подробный анализ ваших продаж и лидов</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <Select defaultValue="month">
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Выберите период" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Неделя</SelectItem>
                    <SelectItem value="month">Месяц</SelectItem>
                    <SelectItem value="quarter">Квартал</SelectItem>
                    <SelectItem value="year">Год</SelectItem>
                    <SelectItem value="custom">Другой период</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Экспорт
              </Button>
            </div>
          </div>
          
          {/* Ключевые показатели */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Конверсия</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32.8%</div>
                <div className="flex items-center text-green-600 text-sm">
                  <span>↑ 4.3% к прошлому периоду</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Средний цикл продажи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12 дней</div>
                <div className="flex items-center text-green-600 text-sm">
                  <span>↓ 2 дня к прошлому периоду</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Стоимость привлечения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2 340 ₽</div>
                <div className="flex items-center text-red-600 text-sm">
                  <span>↑ 8.3% к прошлому периоду</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">412%</div>
                <div className="flex items-center text-green-600 text-sm">
                  <span>↑ 16% к прошлому периоду</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Основные графики */}
          <Tabs defaultValue="sales" className="mb-8">
            <TabsList>
              <TabsTrigger value="sales">Продажи</TabsTrigger>
              <TabsTrigger value="leads">Лиды</TabsTrigger>
              <TabsTrigger value="conversion">Конверсия</TabsTrigger>
              <TabsTrigger value="sources">Источники</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sales" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Динамика продаж</CardTitle>
                    <Select defaultValue="value">
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Показатель" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="value">Сумма</SelectItem>
                        <SelectItem value="count">Количество</SelectItem>
                        <SelectItem value="average">Средний чек</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full border border-dashed rounded-md text-gray-400">
                    <LineChart className="h-12 w-12 mr-4" />
                    <span>График динамики продаж</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="leads" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Динамика лидов</CardTitle>
                    <Select defaultValue="status">
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Группировка" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="status">По статусу</SelectItem>
                        <SelectItem value="source">По источнику</SelectItem>
                        <SelectItem value="quality">По качеству</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full border border-dashed rounded-md text-gray-400">
                    <BarChart className="h-12 w-12 mr-4" />
                    <span>График динамики лидов</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="conversion" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Воронка конверсии</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full border border-dashed rounded-md text-gray-400">
                    <BarChart3 className="h-12 w-12 mr-4" />
                    <span>Воронка конверсии лидов</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sources" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Эффективность источников</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full border border-dashed rounded-md text-gray-400">
                    <PieChart className="h-12 w-12 mr-4" />
                    <span>Распределение источников лидов</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Детальные отчеты */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Качество лидов (AI-оценка)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Отличные (80-100%)</span>
                      <span className="text-sm font-medium">32%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "32%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Хорошие (60-79%)</span>
                      <span className="text-sm font-medium">47%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "47%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Средние (40-59%)</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Слабые (0-39%)</span>
                      <span className="text-sm font-medium">6%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: "6%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Эффективность менеджеров</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-ai-blue">АС</span>
                      </div>
                      <div>
                        <p className="font-medium">Алексей Смирнов</p>
                        <p className="text-sm text-gray-500">32 закрытые сделки</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">92%</p>
                      <p className="text-sm text-gray-500">конверсия</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-ai-purple">ИК</span>
                      </div>
                      <div>
                        <p className="font-medium">Ирина Козлова</p>
                        <p className="text-sm text-gray-500">28 закрытых сдел</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">87%</p>
                      <p className="text-sm text-gray-500">конверсия</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                        <span className="font-medium text-ai-teal">ДП</span>
                      </div>
                      <div>
                        <p className="font-medium">Дмитрий Петров</p>
                        <p className="text-sm text-gray-500">24 закрытые сделки</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-amber-600">75%</p>
                      <p className="text-sm text-gray-500">конверсия</p>
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

export default Analytics;