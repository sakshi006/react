import { IMG_CDN_URL } from "../utils/constants"

export const RestaurantCard = (data) => {

    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = data?.restaurant?.info
    
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <div>{cuisines.map((item)=> <span>{item} </span>)}</div>
            <div>{avgRating} stars</div>
            <div>{costForTwo}</div>
            <div>{sla.deliveryTime} mins</div>
        </div>
    )
}