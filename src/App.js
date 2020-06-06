import React from 'react';
import RandomMeal from './components/RandomMeal';
import Meal from './components/Meal';

function App() {
  return (
    <div className='App'>
      <input type='text' />
      <RandomMeal />

      <Meal />
      <Meal />
    </div>
  );
}

export default App;
