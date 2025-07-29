import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getRandomMeal,
  searchMealsByName,
  searchByCategory,
} from "@/services/mealApi";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import MealCard from "@/components/MealCard";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    setError("");

    try {
      let results = [];

      // 1. Try searching by meal name
      const nameResults = await searchMealsByName(query);
      if (nameResults.length) {
        results = nameResults;
      } else {
        // 2. Try searching by category
        const categoryResults = await searchByCategory(query);
        if (categoryResults.length) {
          results = categoryResults;
        }
      }

      if (!results.length) {
        setError("No meals found by name or category.");
        setMeals([]);
      } else {
        setMeals(results);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch meals.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (mealsFromCategory) => {
    if (mealsFromCategory === null) {
      setMeals([]);
      setError("");
    } else if (mealsFromCategory.length === 0) {
      setError("No meals found for this category.");
      setMeals([]);
    } else {
      setError("");
      setMeals(mealsFromCategory);
    }
  };

  const handleRandomMeal = async () => {
    setLoading(true);
    setError("");

    try {
      const randomMeal = await getRandomMeal();
      if (randomMeal?.idMeal) {
        navigate(`/meal/${randomMeal.idMeal}`);
      }
    } catch {
      setError("Failed to fetch random meal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 sm:px-10 py-8 bg-gradient-to-br from-white via-rose-50 to-orange-50">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-orange-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🍴 Foodie Finder
      </motion.h1>

      {/* Search input */}
      <SearchBar onSearch={handleSearch} />

      {/* Filter by category */}
      <CategoryFilter onSelectCategory={handleCategorySelect} />

      {/* Random meal button */}
      <div className="flex justify-center mt-6">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button onClick={handleRandomMeal} variant="secondary">
            🎲 Discover a Random Meal
          </Button>
        </motion.div>
      </div>

      {/* Loading and error messages */}
      {loading && (
        <motion.p
          className="text-center text-lg mt-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading...
        </motion.p>
      )}

      {error && (
        <motion.p
          className="text-center text-red-600 font-medium mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}

      {/* Results grid */}
      <motion.section
        className="grid gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {meals.map((meal) => (
          <motion.div
            key={meal.idMeal}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          >
            <MealCard meal={meal} />
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
};

export default Home;
