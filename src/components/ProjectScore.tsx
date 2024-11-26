import React from 'react';
import { Shield, Users, Code, TrendingUp } from 'lucide-react';

interface ScoreProps {
  category: string;
  score: number;
  icon: React.ReactNode;
}

const ScoreCard = ({ category, score, icon }: ScoreProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{category}</h3>
        <p className="text-2xl font-bold text-gray-900">{score}/100</p>
      </div>
    </div>
  </div>
);

export default function ProjectScore() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ScoreCard
        category="Security Score"
        score={92}
        icon={<Shield className="h-6 w-6" />}
      />
      <ScoreCard
        category="Community Trust"
        score={88}
        icon={<Users className="h-6 w-6" />}
      />
      <ScoreCard
        category="Code Quality"
        score={95}
        icon={<Code className="h-6 w-6" />}
      />
      <ScoreCard
        category="Growth Metrics"
        score={85}
        icon={<TrendingUp className="h-6 w-6" />}
      />
    </div>
  );
}