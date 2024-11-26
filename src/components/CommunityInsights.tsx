import React from 'react';
import { MessageSquare, ThumbsUp, AlertTriangle } from 'lucide-react';

const FeedbackCard = ({ type, message, author, time }: {
  type: 'positive' | 'neutral' | 'warning';
  message: string;
  author: string;
  time: string;
}) => {
  const bgColor = {
    positive: 'bg-green-50 border-green-200',
    neutral: 'bg-blue-50 border-blue-200',
    warning: 'bg-yellow-50 border-yellow-200'
  }[type];

  const iconColor = {
    positive: 'text-green-500',
    neutral: 'text-blue-500',
    warning: 'text-yellow-500'
  }[type];

  const Icon = {
    positive: ThumbsUp,
    neutral: MessageSquare,
    warning: AlertTriangle
  }[type];

  return (
    <div className={`p-4 rounded-lg border ${bgColor}`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-full ${bgColor}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div className="flex-1">
          <p className="text-gray-800">{message}</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium">{author}</span>
            <span>•</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CommunityInsights() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Community Insights</h2>
      <div className="space-y-4">
        <FeedbackCard
          type="positive"
          message="Strong technical documentation and active developer community."
          author="Alex.eth"
          time="2h ago"
        />
        <FeedbackCard
          type="neutral"
          message="Regular updates from the team, but communication could be more detailed."
          author="CryptoAnalyst"
          time="5h ago"
        />
        <FeedbackCard
          type="warning"
          message="Token distribution needs more transparency."
          author="DeFi_Expert"
          time="1d ago"
        />
      </div>
    </div>
  );
}