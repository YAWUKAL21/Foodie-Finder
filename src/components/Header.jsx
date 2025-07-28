import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 mb-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Foodie Finder 🍽️
        </Link>
      </div>
    </header>
  );
}
