import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Adjust the path if necessary
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setFoods(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {foods.map((foodItem) => (
        <FoodCard
          key={foodItem.name} // Use a unique key for each item
          image={foodItem.image.desktop} // Use the desktop image for the FoodCard
          type={foodItem.category}
          food={foodItem.name}
          price={`$${foodItem.price.toFixed(2)}`} // Format price to two decimal places
        />
      ))}
    </div>
  );
}

export default FoodList;
