import { Link } from "react-router-dom";

const menu = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "FAQ",
    route: "/faq",
  },
];

const AppMenu = () => {
  return (
    <nav className="flex items-center lg:gap-4 mx-auto ">
      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.route}
          className="px-4 font-medium text-[17px] leading-[25px] text-[#0000008C] hover:text-gray-900"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default AppMenu;
