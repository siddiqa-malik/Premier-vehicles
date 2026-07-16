import InfoCard from "./InfoCard";
import { whyChooseData } from "./WhyChooseData";

const WhyChooseSection = () => {
  return (
    <section className="px-4 mx-2 lg:mx-0 xl:mx-8 sm:px-8 lg:px-24 py-16">

      <h2 className="text-4xl font-semibold mb-10">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {whyChooseData.map((item) => (
          <InfoCard
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
};

export default WhyChooseSection;