import React, { useState, ChangeEvent } from 'react';

interface SearchBarProps {
  data: string[];
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ data, onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
