import FoodCard from "./FoodCard";
import Cart from "./Cart";

function App() {
  return (
    <div className="font-sans h-screen py-20 flex gap-8 ">
      <div>
        <h1 className="font-bold text-5xl mb-12">Desserts</h1>
        <div className="grid lg:grid-cols-3 gap-6">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
      <div className="w-96 h-80">
        <Cart />
      </div>
    </div>
  );
}

export default App;
