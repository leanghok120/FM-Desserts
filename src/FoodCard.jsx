function FoodCard({ image, type, food, price }) {
  return (
    <div>
      <div>
        <img src={image} width={300} alt="food" className="rounded-xl"></img>
        <button className="font-bold text-md flex items-center gap-3 bg-white py-2 px-6 rounded-full border border-orange-300 hover:border-orange-700 hover:text-orange-700 relative bottom-6 left-[58px]">
          <img
            src="./src/assets/images/icon-add-to-cart.svg"
            alt="add to cart icon"
            width={28}
          ></img>
          Add to Cart
        </button>
      </div>
      <h2 className="text-gray-500 text-md">{type}</h2>
      <h1 className="font-bold text-lg">{food}</h1>
      <p className="text-lg font-bold text-orange-700">{price}</p>
    </div>
  );
}

export default FoodCard;
