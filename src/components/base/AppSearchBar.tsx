const AppSearchBar = () => {
  return (
    <div className="relative flex-1 max-w-md mx-4">
      <input
        type="text"
        placeholder="Search Watches"
        className="w-full py-1 px-3 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
      />
      <button
        className="absolute right-0 top-0 h-full px-3 flex items-center justify-center bg-gray-800 text-white rounded-r-md"
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="text-xs ml-1">Search</span>
      </button>
    </div>
  );
};

export default AppSearchBar;
