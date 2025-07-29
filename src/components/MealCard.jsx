import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { toggleFavorite, getFavorites } from "@/utils/localStorage";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const MealCard = ({ meal }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    const found = favorites.find((item) => item.idMeal === meal.idMeal);
    setIsFavorite(!!found);
  }, [meal.idMeal]);

  const handleFavorite = (e) => {
    e.preventDefault(); // Prevents link navigation
    toggleFavorite(meal);
    setIsFavorite((prev) => !prev);
  };

  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="relative shadow-md overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={`Photo of ${meal.strMeal}`}
            className="w-full h-48 object-cover rounded-t-md"
          />

          {/* Favorite Icon */}
          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 bg-white p-1 rounded-full shadow"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />
          </button>

          <CardContent className="p-4 text-center">
            <h2 className="font-semibold text-lg text-gray-800">{meal.strMeal}</h2>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default MealCard;
