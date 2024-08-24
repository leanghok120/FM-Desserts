function Cart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full h-full">
      <h1 className="text-orange-700 font-black text-2xl">Your Cart (0)</h1>
      <div className="flex flex-col items-center mt-10">
        <img
          src="./src/assets/images/illustration-empty-cart.svg"
          alt="empty cart image"
          width={150}
        ></img>
        <p className="text-orange-900">Your added items will appear here</p>
      </div>
    </div>
  );
}

export default Cart;
