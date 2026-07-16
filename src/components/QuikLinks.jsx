import Adds from "../assets/images/Adds.png";
import Showroom from "../assets/images/ShowRoom.svg";
import QuikSale from "../assets/images/QuikSale.png";
import RentAcar from "../assets/images/RentAcar.png";
import QuikExchange from "../assets/images/QuikExchange.png";
import SmartShop from "../assets/images/SmartShop.png";

function QuikLinks() {
  const carCards = [
    { id: 1, image: Adds, text: <>Special<br/> Ads</> },
    { id: 2, image: Showroom, text: <>Show Room <br />Cars & Bikes</> },
    { id: 3, image: QuikSale, text: <>Quick <br />Sale</> },
    { id: 4, image: RentAcar, text: <>Rent <br />A Car</> },
    { id: 5, image: QuikExchange, text: <>Quick <br />Exchange</> },
    { id: 6, image: SmartShop, text: <>Smart <br />Shop</> },
  ];

  return (
    <section className="  bg-white px-4  sm:px-6 lg:px-4 mt-10">
  <div className=" mt-10 mx-3 xl:mx-25 lg:mx-10 md:mx-10 gap-2 sm:gap-5 mb-5 sm:mb-20 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 ">
    {carCards.map((card) => (
      <div
        key={card.id}
        className=" w-[175px] h-[170px] md:w-[95%] md:h-[220px] lg:w-[290px] lg:h-[290px]   rounded-[20px] p-5 text-white shadow-md flex flex-col justify-between"
        style={{
          background: "linear-gradient(to top right, #FF5722, #B52C00)",
        }}
      >
        <div className="flex justify-end">
          <img
            src={card.image}
            alt={card.text}
            className="w-20 h-20 sm:h-30 sm:w-30   object-contain "
          />
        </div>

        <div>
          <h3 className="text-lg sm:text-2xl mt-[-4] font-semibold leading-tight">
            {card.text}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}

export default QuikLinks;