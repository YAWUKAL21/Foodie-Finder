export const toggleFavorite = (meal) => {
  const existing = JSON.parse(localStorage.getItem("favorites")) || [];
  const found = existing.find((item) => item.idMeal === meal.idMeal);
  const updated = found
    ? existing.filter((item) => item.idMeal !== meal.idMeal)
    : [...existing, meal];

  localStorage.setItem("favorites", JSON.stringify(updated));
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};
