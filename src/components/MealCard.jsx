import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <Card className="hover:scale-[1.02] transition-transform cursor-pointer shadow-md">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover rounded-t-md"
        />
        <CardContent className="p-4 text-center">
          <h2 className="font-semibold text-lg">{meal.strMeal}</h2>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MealCard;
