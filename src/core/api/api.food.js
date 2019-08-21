import _foods from "./_foods.json";

const ApiFood = {
  getFoods: ({ cuisineType, mealType }) => {
    let foods = _foods;
    if (cuisineType)
      foods = foods.filter(food => food.cuisineType.title === cuisineType);

    if (mealType)
      foods = foods.filter(food => food.mealType.title === mealType);

    return foods;
  }
};

export default ApiFood;
