import FuelCard from "./FuelCard";
import { fuelPrices } from "./FuelPricesData";

const FuelPriceSection = () => {
  return (
    <section className="px-4 mb-18 mx-6 -mt-18 lg:mt-0 sm:px-8 lg:px-24 py-16">

      <h2 className="text-xl font-bold mb-8">
        Current Fuel Prices
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

        {fuelPrices.map((item) => (
          <FuelCard
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
};

export default FuelPriceSection;