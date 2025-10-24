import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = (props) => {
  const { query, setQuery, onSearch } = props;

  return (
    <div className="flex items-center relative w-100 ">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") onSearch();
        }}
        className="w-full pl-4 pr-10 py-2 border border-gray-400 rounded-3xl outline-none focus:border-blue-500 shadow-lg"
      />

      {/* Icon with background */}
      <div className="absolute right-0.5 top-1/2 -translate-y-1/2  p-3 py-2.5 rounded-r-full rounded-l-none hover:bg-gray-300 cursor-pointer">
        <IoIosSearch className="text-gray-700" size={18} />
      </div>
    </div>
  );
};

export default SearchBar;
