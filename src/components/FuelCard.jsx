import {fuelPrices}  from "./FuelPricesData"
const FuelCard = ({ item }) => {
  return (
    <div className="bg-[#F9FAFB] rounded-xl p-5 shadow-sm hover:shadow-md transition">

      <p className="text-gray-600 text-sm">
        {item.name}
      </p>

      <h3 className="mt-3 text-lg font-bold text-gray-900">
        {item.price}
        <span className="text-sm ml-2 font-medium">
          PKR
        </span>
      </h3>

    </div>
  );
};

export default FuelCard;