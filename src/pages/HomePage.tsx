import AppCategories from "@/components/base/AppCategories";

const HomePage = () => {
  const watchCategories = [
    { name: "Retro Watches", route: "/category/retro" },
    { name: "Fancy Watches", route: "/category/fancy" },
    { name: "New Watches", route: "/category/new" },
    { name: "Gadget Watches", route: "/category/gadget" },
  ];

  return (
    <div>
      <AppCategories categories={watchCategories} />
    </div>
  );
};

export default HomePage;
