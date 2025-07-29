import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Search meals by name
export const searchMealsByName = async (query) => {
  try {
    const res = await api.get(`/search.php?s=${query}`);
    return res.data.meals || [];
  } catch (error) {
    console.error("searchMealsByName Error:", error.message);
    return [];
  }
};

// Get meal details by ID
export const getMealDetails = async (id) => {
  try {
    const res = await api.get(`/lookup.php?i=${id}`);
    return res.data.meals?.[0];
  } catch (error) {
    console.error("getMealDetails Error:", error.message);
    return null;
  }
};

// Get all categories
export const getCategories = async () => {
  try {
    const res = await api.get("/categories.php");
    return res.data.categories || [];
  } catch (error) {
    console.error("getCategories Error:", error.message);
    return [];
  }
};

// Search meals by category
export const searchByCategory = async (category) => {
  try {
    const res = await api.get(`/filter.php?c=${category}`);
    return res.data.meals || [];
  } catch (error) {
    console.error("searchByCategory Error:", error.message);
    return [];
  }
};

// Get a random meal
export const getRandomMeal = async () => {
  try {
    const res = await api.get("/random.php");
    return res.data.meals?.[0];
  } catch (error) {
    console.error("getRandomMeal Error:", error.message);
    return null;
  }
};

// ✅ Get all available areas (countries)
export const getAreas = async () => {
  try {
    const res = await api.get("/list.php?a=list");
    return res.data.meals || [];
  } catch (error) {
    console.error("getAreas Error:", error.message);
    return [];
  }
};

// ✅ Search meals by area (country)
export const searchByArea = async (area) => {
  try {
    const res = await api.get(`/filter.php?a=${area}`);
    return res.data.meals || [];
  } catch (error) {
    console.error("searchByArea Error:", error.message);
    return [];
  }
};
