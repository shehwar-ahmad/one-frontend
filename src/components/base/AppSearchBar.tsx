import MagnifyingGlass from "@/assets/MagnifyingGlass.svg";

const AppSearchBar = () => {
  return (
    <div className="relative flex-1 p-2 border border-solid border-[#0000001A] w-full min-w-[300px] max-w-[692px] rounded-[100px] h-[43px]">
      <input
        type="text"
        placeholder="Search Watches"
        className="w-full max-w-[550px] px-5 pr-10 text-sm rounded-md focus:outline-none placeholder:font-semibold"
      />
      <button
        className="absolute right-[6px] top-[4px] h-[33px] w-[112px] px-3 flex items-center justify-center bg-[#202020] text-white rounded-[100px]"
        aria-label="Search"
      >
        <img src={MagnifyingGlass} alt="Search Icon" className="h-4 w-4" />

        <span className="ml-1 font-medium text-[13px] leading-[50px] text-white">
          Search
        </span>
      </button>
    </div>
  );
};

export default AppSearchBar;
