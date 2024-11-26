import React from 'react';
import { Search, Menu, Gauge, Bell, User } from 'lucide-react';

interface NavbarProps {
  onLogoClick: () => void;
}

export default function Navbar({ onLogoClick }: NavbarProps) {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={onLogoClick}
              className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Gauge className="h-8 w-8" />
              <span className="font-bold text-xl">TokenGauge</span>
            </button>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-indigo-700">Dashboard</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Projects</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Analytics</a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Community</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-indigo-500 text-white placeholder-indigo-200 rounded-full py-1 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-indigo-200" />
              </div>
              <button className="p-1 rounded-full hover:bg-indigo-500">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-1 rounded-full hover:bg-indigo-500">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-indigo-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}