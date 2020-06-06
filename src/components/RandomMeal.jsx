import React, { useState, useEffect } from 'react';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const RandomMeal = () => {
  const [meal, setMeal] = useState(undefined);

  useEffect(() => {
    async function getMeal() {
      const res = await fetch(API_URL);
      const data = await res.json();

      setMeal(data.meals[0]);
    }
    getMeal();
  }, []);

  if (!meal) return null;

  const { strMeal, strMealThumb, strInstructions, strArea, strCategory } = meal;

  return (
    <div className='meal'>
      <div className='meal__img'>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className='meal__details'>
        <h3 className='meal__title'>{strMeal}</h3>
        <p className='meal__instruction'>
          {strInstructions.substring(0, 200) + '...'}
        </p>
        <ul className='meal__info'>
          <li>
            Category
            <strong>{strCategory}</strong>
          </li>
          <li>
            Area
            <strong>{strArea}</strong>
          </li>
        </ul>
        <button className='btn'>
          View Recipe <i class='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
  );
};

export default RandomMeal;
