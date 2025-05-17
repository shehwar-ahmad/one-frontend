import { Link } from "react-router-dom";
import classNames from "classnames";
import BottomLeftImg from "@/assets/bottom-left.svg";

interface ProductCardProps {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  priceDropAmount?: number;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  priceDropAmount,
  className,
}) => {
  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div
      className={classNames(
        "rounded-[10px] overflow-hidden w-full max-w-[231px] max-h-[273px] border border-solid border-[#0000001A] mx-auto md:mx-0",
        className
      )}
    >
      <Link to={`/product/${id}`} className="block">
        <div className="flex justify-center items-center h-[146px] bg-[#F2F4F8]">
          <img
            src={image}
            alt={name}
            className="h-[123px] w-auto object-contain"
          />
        </div>
        <div className="p-4 h-[127px] flex flex-col justify-between">
          <div className="flex items-baseline">
            <span className="font-bold text-[17px] tracking-[0%]">
              ${price.toLocaleString()}
            </span>
            {hasDiscount && (
              <span className="ml-2 font-semibold text-sm tracking-[0%] line-through text-[#42424266]">
                ${originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <h3 className="font-semibold text-sm leading-[18px] tracking-[0%] max-w-[178px]">
            {name}
          </h3>

          <div className="flex flex-row items-center justify-between">
            {priceDropAmount && (
              <div className="flex items-center">
                <img src={BottomLeftImg} alt="Price Drop" className="w-4 h-4" />

                <span className="ml-1 text-secondary font-medium text-[13px] tracking-[0%]">
                  ${priceDropAmount} Price drop
                </span>
              </div>
            )}

            <div className="w-[33px] h-[33px] bg-secondary rounded-full"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
