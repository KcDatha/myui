import React, { useState } from 'react';
import TransportationRequest from './components/TransportationRequest';
import DriversListPage from './components/DriversListPage';
import { SidebarProvider } from './context/SidebarContext';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('requests');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'requests':
        return <TransportationRequest />;
      case 'drivers':
        return <DriversListPage />;
      default:
        return <TransportationRequest />;
    }
  };

  return (
    <div className="App">
      <SidebarProvider>
        {React.cloneElement(renderCurrentPage(), { setCurrentPage })}
      </SidebarProvider>
    </div>
  );
}