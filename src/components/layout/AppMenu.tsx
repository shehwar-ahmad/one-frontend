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
    <nav className="flex items-center">
      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.route}
          className="px-4 text-gray-600 hover:text-gray-900"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default AppMenu;
