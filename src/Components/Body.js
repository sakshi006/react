import { RestaurantCard } from "./RestaurantCard"
import { data } from "../utils/data"
import { useState } from "react"


export const Body = () => {
    const [resData, setResData] = useState(data)

    const getTopRatedRestaurants = (e) => {
        console.log("here")
        newResData = resData.filter(res =>  res?.info?.avgRating > 4)
        setResData(newResData)
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick = {() => getTopRatedRestaurants()}>Top-Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resData.map((restaurant) =>
                   <RestaurantCard restaurant = {restaurant} />
                  )}
            </div>
        </div>
    )
}