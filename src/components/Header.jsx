import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategories, getAreas } from "@/services/mealApi";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const categoryData = await getCategories();
      const areaData = await getAreas();
      setCategories(categoryData);
      setAreas(areaData);
    };
    fetchData();
  }, []);

  const handleCategorySelect = (e) => {
    const selected = e.target.value;
    if (selected) navigate(`/home?category=${selected}`);
  };

  const handleAreaSelect = (e) => {
    const selected = e.target.value;
    if (selected) navigate(`/home?area=${selected}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Foodie Finder 🍽️
        </Link>

        {/* Nav and dropdowns */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
          <Link
            to="/home"
            className="text-gray-700 hover:text-orange-500 text-sm md:text-base"
          >
            Home
          </Link>

          {/* Category Dropdown */}
          <select
            className="px-3 py-2 border border-gray-300 rounded text-sm md:text-base w-full md:w-auto"
            onChange={handleCategorySelect}
            defaultValue=""
          >
            <option value="" disabled>
              Choose Category
            </option>
            {categories.map((cat) => (
              <option key={cat.idCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>

          {/* Country Dropdown */}
          <select
            className="px-3 py-2 border border-gray-300 rounded text-sm md:text-base w-full md:w-auto"
            onChange={handleAreaSelect}
            defaultValue=""
          >
            <option value="" disabled>
              Choose Country
            </option>
            {areas.map((area) => (
              <option key={area.strArea} value={area.strArea}>
                {area.strArea}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
