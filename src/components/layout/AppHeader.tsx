import { Link } from "react-router-dom";
import AppMenu from "./AppMenu";
import AppSearchBar from "../base/AppSearchBar";

const AppHeader = () => {
  return (
    <header className="bg-green-500 py-4 px-6 border-b border-gray-100 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            {/* Placeholder for the logo */}
          </div>
          <span className="ml-2 font-medium text-gray-700">Lorem Ipsum</span>
        </Link>

        {/* Search Bar */}
        <AppSearchBar />

        {/* Navigation Menu */}
        <AppMenu />
      </div>
    </header>
  );
};

export default AppHeader;
