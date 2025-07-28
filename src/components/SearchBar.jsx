import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center max-w-xl mx-auto mt-8 px-4">
      <Input
        type="text"
        placeholder="Search meals by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" className="px-6">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
