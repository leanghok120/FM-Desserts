import Cart from "./Cart";
import FoodList from "./FoodList";

function App() {
  return (
    <div className="font-sans h-screen py-20 flex gap-8 ">
      <div>
        <h1 className="font-black text-5xl mb-12">Desserts</h1>
        <FoodList />
      </div>
      <div className="w-96 h-80">
        <Cart />
      </div>
    </div>
  );
}

export default App;
