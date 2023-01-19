import React from 'react';
import './App.css';
import { AppTitle, CalculatorCard } from './components';

const App:React.FC = () => {
  return (
    <div className="App">
      <AppTitle />
      <CalculatorCard />
    </div>
  );
}

export default App;
