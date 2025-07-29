import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMealDetails } from "@/services/mealApi";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getMealDetails(id);
        if (!data) {
          setError("Meal not found.");
        } else {
          setMeal(data);
        }
      } catch {
        setError("Failed to fetch meal details.");
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
  }, [id]);

  // Extract ingredients + measurements dynamically
  const getIngredients = () => {
    if (!meal) return [];
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`.trim());
      }
    }
    return ingredients;
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!meal) return null;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <Link to="/Home">
        <Button variant="outline" className="mb-6">← Back to Search</Button>
      </Link>

      <Card className="overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-64 object-cover"
        />
        <CardContent>
          <h1 className="text-3xl font-bold mb-2">{meal.strMeal}</h1>
          <p className="mb-1"><strong>Category:</strong> {meal.strCategory}</p>
          <p className="mb-4"><strong>Country:</strong> {meal.strArea}</p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1">
              {getIngredients().map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <p className="whitespace-pre-line">{meal.strInstructions}</p>
          </section>

          {meal.strYoutube && (
            <section>
              <h2 className="text-2xl font-semibold mb-2">Cooking Video</h2>
              <iframe
                title="YouTube Cooking Video"
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${new URL(meal.strYoutube).searchParams.get("v") || meal.strYoutube.split("v=")[1]}`}
                frameBorder="0"
                allowFullScreen
                className="rounded-md"
              ></iframe>
            </section>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default MealDetail;
