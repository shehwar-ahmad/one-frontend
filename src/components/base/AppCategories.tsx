import { Link } from "react-router-dom";
import classNames from "classnames";

interface Category {
  name: string;
  route: string;
}

interface AppCategoriesProps {
  categories: Category[];
}

const AppCategories = ({ categories }: AppCategoriesProps) => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center flex-wrap font-medium text-[15px] leading-[50px] tracking-[0%]">
        <span className="text-[#42424280] mr-4">Categories</span>
        <span className="text-[#929299] mr-4 ">|</span>
        {categories.map((category, index) => (
          <div key={category.name} className="flex items-center">
            <Link
              to={category.route}
              className={classNames("mr-4 text-[#42424280]", { "text-secondary": index === 0 })}
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppCategories;
