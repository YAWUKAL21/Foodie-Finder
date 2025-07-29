import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name"); // 'name', 'ingredient', or 'category'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim(), searchType); // Pass both query and type
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-center max-w-3xl mx-auto mt-8 px-4"
    >
      <Input
        type="text"
        placeholder={`Search meals by ${searchType}...`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="border rounded-md px-3 py-2 text-sm bg-white text-gray-700"
      >
        <option value="name">Meal Name</option>
        <option value="ingredient">Ingredient</option>
        <option value="category">Category</option>
      </select>
      <Button type="submit" className="px-6">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
