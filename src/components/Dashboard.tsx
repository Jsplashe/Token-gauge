import React, { useState } from 'react';
import ProjectScore from './ProjectScore';
import CommunityInsights from './CommunityInsights';
import FeedbackModal from './FeedbackModal';
import { MessageSquare } from 'lucide-react';

export default function Dashboard() {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Project Overview</h1>
            <p className="mt-2 text-gray-600">Comprehensive analysis and community insights for crypto projects</p>
          </div>
          <button
            onClick={() => setIsFeedbackModalOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Share Feedback
          </button>
        </div>

        <div className="space-y-8">
          <ProjectScore />
          <CommunityInsights />
        </div>
      </main>

      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />
    </div>
  );
}