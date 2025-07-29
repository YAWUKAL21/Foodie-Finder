import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getCategories, searchByCategory } from "@/services/mealApi";

const CategoryFilter = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const cats = await getCategories();
        setCategories(cats);
      } catch {
        setCategories([]);
      }
    }
    fetchCategories();
  }, []);

  const handleCategoryClick = async (category) => {
    setActiveCategory(category);
    if (category === "") {
      
      onSelectCategory(null);
      return;
    }
    const meals = await searchByCategory(category);
    onSelectCategory(meals);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center my-6 px-4">
      <Button
        variant={activeCategory === "" ? "default" : "outline"}
        onClick={() => handleCategoryClick("")}
      >
        All
      </Button>
      {categories.map((cat) => (
        <Button
          key={cat.idCategory}
          variant={activeCategory === cat.strCategory ? "default" : "outline"}
          onClick={() => handleCategoryClick(cat.strCategory)}
        >
          {cat.strCategory}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
