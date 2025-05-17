import AppCategories from "@/components/base/AppCategories";
import ProductCard from "@/components/product/ProductCard";
import watchImage from "@/assets/watches/watch-1.svg";

const watchCategories = [
  { name: "Retro Watches", route: "/category/retro" },
  { name: "Fancy Watches", route: "/category/fancy" },
  { name: "New Watches", route: "/category/new" },
  { name: "Gadget Watches", route: "/category/gadget" },
];

const featuredProducts = [
  {
    id: "1806",
    name: "1806 Timemaster Rolex 18th Edition",
    price: 1338,
    originalPrice: 1338,
    image: watchImage,
    priceDropAmount: 144,
  },
  {
    id: "2405",
    name: "1806 Timemaster Rolex 18th Edition",
    price: 899,
    originalPrice: 999,
    image: watchImage,
    priceDropAmount: 100,
  },
  {
    id: "3219",
    name: "1806 Timemaster Rolex 18th Edition",
    price: 2499,
    image: watchImage,
    priceDropAmount: 100,
  },
  {
    id: "4078",
    name: "1806 Timemaster Rolex 18th Edition",
    price: 699,
    originalPrice: 799,
    image: watchImage,
    priceDropAmount: 100,
  },
  {
    id: "4078",
    name: "1806 Timemaster Rolex 18th Edition",
    price: 699,
    originalPrice: 799,
    image: watchImage,
    priceDropAmount: 100,
  },
];

const HomePage = () => {
  return (
    <div>
      <AppCategories categories={watchCategories} />

      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Watches</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              priceDropAmount={product.priceDropAmount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
