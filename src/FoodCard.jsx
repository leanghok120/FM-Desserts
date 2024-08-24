function FoodCard() {
  return (
    <div>
      <div>
        <img
          src="./src/assets/images/image-cake-desktop.jpg"
          width={300}
          alt="cake"
          className="rounded-xl"
        ></img>
        <button className="font-bold text-md flex items-center gap-3 bg-white py-2 px-6 rounded-full border border-orange-300 relative bottom-6 left-[58px]">
          <img
            src="./src/assets/images/icon-add-to-cart.svg"
            alt="add to cart icon"
            width={28}
          ></img>
          Add to Cart
        </button>
      </div>
      <h2 className="text-gray-500 text-md">Waffle</h2>
      <h1 className="font-bold text-lg">Waffle with Berries</h1>
      <p className="text-lg font-bold text-orange-700">$6.50</p>
    </div>
  );
}

export default FoodCard;
