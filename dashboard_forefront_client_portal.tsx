
'use client';

import { useState, useEffect } from 'react';

type Pot = {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  goalDate: string;
};

type Insight = {
  id: number;
  title: string;
  message: string;
};

export default function Dashboard() {
  const [pots, setPots] = useState<Pot[]>([]);
  const [insights, setInsights] = useState<Insight[]>([]);

  useEffect(() => {
    // Simulated fetch - Replace with API calls
    setPots([
      { id: 1, name: 'Holiday Fund', targetAmount: 10000, currentAmount: 2500, goalDate: '2025-12-31' },
      { id: 2, name: 'Retirement Fund', targetAmount: 200000, currentAmount: 80000, goalDate: '2045-06-30' },
    ]);
    setInsights([
      { id: 1, title: 'Market Update', message: 'FTSE 100 shows 3% rise' },
      { id: 2, title: 'Portfolio Rebalancing', message: 'Suggested reallocation for risk optimization' },
    ]);
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-navy">Welcome to Your Dashboard</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">Your Pots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pots.map((pot) => (
            <div key={pot.id} className="p-4 rounded-lg shadow bg-white">
              <h3 className="text-lg font-bold">{pot.name}</h3>
              <p className="text-sm">Target: £{pot.targetAmount.toLocaleString()}</p>
              <p className="text-sm">Current: £{pot.currentAmount.toLocaleString()}</p>
              <progress className="w-full mt-2" value={pot.currentAmount} max={pot.targetAmount}></progress>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Insights</h2>
        <div className="space-y-2">
          {insights.map((insight) => (
            <div key={insight.id} className="p-4 rounded-lg shadow bg-white">
              <h4 className="font-semibold">{insight.title}</h4>
              <p className="text-sm text-gray-600">{insight.message}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
