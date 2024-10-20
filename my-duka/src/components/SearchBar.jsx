// src/SearchBar.jsx
import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log('Searching for:', query);
    // For example, you might want to call an API or filter a list
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder=""
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="bg-green-500 text-black rounded px-2 py-2 hover:bg-green-200"
      >
         <span class="material-symbols-outlined"> <SearchBar /></span>
    
      </button>
    </form>
  );
};

export default SearchBar;
