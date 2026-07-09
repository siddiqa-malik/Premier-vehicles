import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
import car3 from "../assets/images/car3.png";
import car4 from "../assets/images/car4.png";
import bike1 from "../assets/images/bike1.png"
import bike2 from "../assets/images/bike2.png"
import bike3 from "../assets/images/bike3.png"
import bike4 from "../assets/images/bike4.png"
import carForSell from "../assets/images/carForSell.png";
import carBGcircle from "../assets/images/carBGcircle.png";
import BikeForSell from "../assets/images/BikeForSell.png"
import tyre from "../assets/images/Tyre.png"


const cars = [
  { id: 1, image: car1, title:"Toyota corolla 2021", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago" },
  { id: 2, image: car2, title:"Toyota corolla 2021", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago"},
  { id: 3, image: car3, title:"Toyota corolla 2021", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago" },
  { id: 4, image: car4, title:"Toyota corolla 2021", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago" },
  { id: 5, image: car1, title:"Toyota corolla 2021", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago" },
  { id: 6, image: car2,  title:"Toyota corolla 2021", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago"},
  { id: 7, image: car3, title:"Toyota corolla 2021", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago" },
  { id: 8, image: car4, title:"Toyota corolla 2021", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago" },
];

const bikes = [
{id:1, image:bike1, title:"Honda CB 15OF", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago"},
{id:2, image:bike2, title:"Honda CB 15OF", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago"},
{id:3, image:bike3, title:"Honda CB 15OF", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago"},
{id:4, image:bike4, title:"Honda CB 15OF", location: "Islamabad",
  featured: true,
  price: "PKR 40.3 lacs",

  specs: [
    "2017",
    "33.9 km",
    "Petrol"
  ],

  time: "2 days ago"},

];

const carBanner = {
  subtitle: "Looking to Sell or Buy a Car?",
  title: "Premier Selling Cars",
  description: "Get the best deals...",
  buttonText: "Sell your Car",
  vehicleImage: carForSell,
  bgImage: carBGcircle,
};

const bikeBanner = {
  subtitle: "Looking to Sell or Buy a Bike?",
  title: "Premium Selling Bikes",
  description: "Buy and sell bikes...",
  buttonText: "Sell your Bike",
  vehicleImage: BikeForSell,
  bgImage: carBGcircle,
};

const AutoParts =[
  {
  id: 2,
  image: tyre,
  title: "Michelin Tyre",

  location: "Lahore",
  featured: false,
  price: "PKR 25,000",

  specs: [
    "Brand New",
    "In Stock",
    "Free Delivery"
  ],

  time: "Today"
},
{
  id: 2,
  image: tyre,
  title: "Michelin Tyre",

  location: "Lahore",
  featured: false,
  price: "PKR 25,000",

  specs: [
    "Brand New",
    "In Stock",
    "Free Delivery"
  ],

  time: "Today"
},
{
  id: 2,
  image: tyre,
  title: "Michelin Tyre",

  location: "Lahore",
  featured: false,
  price: "PKR 25,000",

  specs: [
    "Brand New",
    "In Stock",
    "Free Delivery"
  ],

  time: "Today"
},
{
  id: 2,
  image: tyre,
  title: "Michelin Tyre",

  location: "Lahore",
  featured: false,
  price: "PKR 25,000",

  specs: [
    "Brand New",
    "In Stock",
    "Free Delivery"
  ],

  time: "Today"
},
{
  id: 2,
  image: tyre,
  title: "Michelin Tyre",

  location: "Lahore",
  featured: false,
  price: "PKR 25,000",

  specs: [
    "Brand New",
    "In Stock",
    "Free Delivery"
  ],

  time: "Today"
}

]

export {cars,bikes,bikeBanner,carBanner, AutoParts};

