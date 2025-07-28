const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchMealsByName = async (query) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || []; // Return empty array if no results
};

export const getMealDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals?.[0];
};

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories.php`);
  const data = await res.json();
  return data.categories || [];
};

export const searchByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals || [];
};

export const getRandomMeal = async () => {
  const res = await fetch(`${BASE_URL}/random.php`);
  const data = await res.json();
  return data.meals?.[0];
};
