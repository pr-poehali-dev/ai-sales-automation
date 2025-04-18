import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChartPlaceholder from "./ChartPlaceholder";
import { BarChart3, PieChart, Users, TrendingUp, User } from "lucide-react";

const DashboardTabs = () => {
  return (
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
              <ChartPlaceholder 
                icon={<BarChart3 className="h-12 w-12 mr-4" />} 
                text="График динамики продаж" 
                height="h-full"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Источники лидов</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ChartPlaceholder 
                icon={<PieChart className="h-12 w-12 mr-4" />} 
                text="Диаграмма источников" 
                height="h-full"
              />
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
            <ChartPlaceholder 
              icon={<Users className="h-12 w-12 mr-4" />} 
              text="Данные по лидам будут здесь" 
            />
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="sales" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Отчет по продажам</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartPlaceholder 
              icon={<TrendingUp className="h-12 w-12 mr-4" />} 
              text="Данные по продажам будут здесь" 
            />
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="team" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Эффективность команды</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartPlaceholder 
              icon={<User className="h-12 w-12 mr-4" />} 
              text="Данные по команде будут здесь" 
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;