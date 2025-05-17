import { Link } from "react-router-dom";
import AppMenu from "./AppMenu";
import AppSearchBar from "../base/AppSearchBar";

const AppHeader = () => {
  return (
    <header className="py-4  w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-row items-center flex-1 gap-4 md:gap-6 xl:gap-10">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-[38px] h-[38px] bg-[#D9D9D9] rounded-full flex items-center justify-center"></div>
            <span className="font-bold text-lg leading-[50px] ml-3">
              Lorem Ipsum
            </span>
          </Link>

          {/* Search Bar */}
          <AppSearchBar />
        </div>

        {/* Navigation Menu */}
        <AppMenu />
      </div>
    </header>
  );
};

export default AppHeader;
