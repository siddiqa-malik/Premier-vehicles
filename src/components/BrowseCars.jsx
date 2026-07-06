import carlogo1 from "../assets/images/carlogo1.png";
import carlogo2 from "../assets/images/carlogo2.png";
import carlogo3 from "../assets/images/carlogo3.png";
import carlogo4 from "../assets/images/carlogo4.png";
import carlogo5 from "../assets/images/carlogo5.png";
import carlogo6 from "../assets/images/carlogo6.png";
import carlogo7 from "../assets/images/carlogo7.png";
import carlogo8 from "../assets/images/carlogo8.png";
import carlogo9 from "../assets/images/carlogo9.png";
import carlogo10 from "../assets/images/carlogo10.png";
import carlogo11 from "../assets/images/carlogo11.png";
import carlogo12 from "../assets/images/carlogo12.png";

function BrowseCars() {
    const carsLogos = [
        { id: 1, image: carlogo1 },
        { id: 2, image: carlogo2 },
        { id: 3, image: carlogo3 },
        { id: 4, image: carlogo4 },
        { id: 5, image: carlogo5 },
        { id: 6, image: carlogo6 },
        { id: 7, image: carlogo7 },
        { id: 8, image: carlogo8 },
        { id: 9, image: carlogo9 },
        { id: 10, image: carlogo10 },
        { id: 11, image: carlogo11 },
        { id: 12, image: carlogo12 },
    ];

    return (
        <div className="browse-cars-container">
            <h2>Browse Cars</h2>
            <div className="cars-logos-container">
                {carsLogos.map((car) => (
                    <img
                        key={car.id}
                        src={car.image}
                        alt={`Car Logo ${car.id}`}
                        className="car-logo"
                    />
                ))}
            </div>
        </div>
    );
}

export default BrowseCars;