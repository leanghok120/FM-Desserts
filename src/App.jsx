import FoodCard from "./FoodCard";

function App() {
  return (
    <div className="font-sans h-screen py-20 lg:px-32 grid grid-cols-2 bg-[#fffcf4]">
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
    </div>
  );
}

export default App;
