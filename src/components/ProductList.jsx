import cars from "../components/ProductsData";
import ProductCard from "./ProductCard";

function ProductList() {
  const list = Array.isArray(cars) ? cars : [];

  return (<>
  <div className=" sm:mx-14 px-4 sm:px-6 lg:px-25 py-10">
    <p className="text-4xl font-medium text-slate-900 sm:mx-10 mb-20 mb-7">Featured cars</p>
    <div className="flex justify-center items-center flex-wrap sm:flex-nowrap gap-6">
      

      {list.map((car) => (
        <ProductCard key={car.id} product={car} />
      ))}
    </div></div></>
  );
}

export default ProductList;

