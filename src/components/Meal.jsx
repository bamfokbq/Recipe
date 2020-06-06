import React from 'react';

const Meal = ({ meal }) => {
  if (!meal) return null;

  const { strMealThumb, strMeal, strInstructions, strCategory, strArea } = meal;
  return (
    <div className='meal'>
      <div className='meal__img'>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className='meal__details'>
        <h3 className='meal__title'>{strMeal}</h3>
        <p className='meal__instruction'>
          {strInstructions && strInstructions.substring(0, 200) + '...'}
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

export default Meal;
