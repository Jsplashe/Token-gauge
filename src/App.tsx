import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  const [showDashboard, setShowDashboard] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogoClick={() => setShowDashboard(false)} />
      {showDashboard ? (
        <Dashboard />
      ) : (
        <LandingPage onGetStarted={() => setShowDashboard(true)} />
      )}
    </div>
  );
}

export default App;