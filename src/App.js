import React from 'react';
import RandomMeal from './components/RandomMeal';

function App() {
  return (
    <div className='App'>
      Hello React
      <div className='container'>
        <h2>Featured Meal</h2>
        <RandomMeal />
      </div>
    </div>
  );
}

export default App;
