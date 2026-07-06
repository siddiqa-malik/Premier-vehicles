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
    <section className="w-full bg-white px-4 sm:px-6 lg:px-4 mt-10">
  <div className="mx-auto mt-10 flex  max-w-7x1 flex-wrap flex-row justify-center gap-5 mb-20 lg:flex-nowrap lg:justify-center">
    {carCards.map((card) => (
      <div
        key={card.id}
        className=" w-[150px] h-[150px] sm:w-[196px] sm:h-[190px]  rounded-[20px] p-5 text-white shadow-md flex flex-col justify-between"
        style={{
          background: "linear-gradient(to top right, #FF5722, #B52C00)",
        }}
      >
        <div className="flex justify-end">
          <img
            src={card.image}
            alt={card.text}
            className="w-20 h-20 sm:h-25 sm:w-25  object-contain text-lg sm:text-xl"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold leading-tight">
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