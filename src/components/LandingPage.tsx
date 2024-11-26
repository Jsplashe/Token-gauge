import React from 'react';
import { Shield, Users, TrendingUp, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90" />
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simplify Crypto Investing with TokenGauge
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Your go-to platform for transparent and reliable crypto project evaluations
            </p>
            <button
              onClick={onGetStarted}
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TokenGauge?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make informed investment decisions with our comprehensive analysis tools and community insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Security First"
            description="Advanced security analysis and risk assessment for every project"
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Community Driven"
            description="Real insights from experienced crypto investors and developers"
          />
          <FeatureCard
            icon={<TrendingUp className="h-6 w-6" />}
            title="Market Analytics"
            description="Comprehensive market data and growth metrics at your fingertips"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to make smarter crypto investments?
          </h2>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-indigo-600 transition-colors"
          >
            Start Analyzing
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}