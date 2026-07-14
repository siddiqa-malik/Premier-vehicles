const InfoCard = ({ item }) => {
  return (
    <div className="bg-[#F9FAFB] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">

      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">

        <img
          src={item.icon}
          alt={item.title}
          className="w-8 h-8 object-contain"
        />

      </div>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        {item.title}
      </h3>

      <p className="mt-3 text-gray-500 leading-7">
        {item.description}
      </p>

    </div>
  );
};

export default InfoCard;