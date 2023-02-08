import { useState } from 'react';
import './App.css';
import FilterPanel from './components/FilterPanel';
import Header from './components/Header';
import Table from './components/Table';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="wrapper-header">
          <h2 className="title">Ordinals Ranking</h2>
          <FilterPanel />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;
