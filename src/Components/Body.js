import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurantData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setResData(restaurantData)
    setFilteredRestaurent(restaurantData)
  };

  const getTopRatedRestaurants = (e) => {
    const newResData = filteredRestaurent.filter((res) => res?.info?.avgRating > 4);
    setFilteredRestaurent(newResData);
  };

  return resData.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const filteredRestaurent = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurent);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={() => getTopRatedRestaurants()}>
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map((restaurant, id) => (
          <RestaurantCard key={id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
