import StatCard from "./StatCard";

const StatCards = () => {
  const stats = [
    {
      title: "Новые лиды",
      value: "127",
      change: {
        value: "+12.5%",
        isPositive: true,
      },
      period: "За последние 7 дней",
    },
    {
      title: "Конверсия в продажи",
      value: "32.8%",
      change: {
        value: "+4.3%",
        isPositive: true,
      },
      period: "В среднем за месяц",
    },
    {
      title: "Средний чек",
      value: "32 450 ₽",
      change: {
        value: "-2.1%",
        isPositive: false,
      },
      period: "В этом месяце",
    },
    {
      title: "Выручка",
      value: "1.2M ₽",
      change: {
        value: "+18.2%",
        isPositive: true,
      },
      period: "За текущий квартал",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          period={stat.period}
        />
      ))}
    </div>
  );
};

export default StatCards;