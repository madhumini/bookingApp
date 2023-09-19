// import './searchItem.css'

// const SearchItem = () => {
//   return (
//     <div className="searchItem">
//       <img
//         src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600"
//         alt=""
//         className="siImg"
//       />
//       <div className="siDesc">
//         <h1 className="siTitle">Tower Street Apartments</h1>
//         <span className="siDistance">500m from center</span>
//         <span className="siTaxiOp">Free airport taxi</span>
//         <span className="siSubtitle">
//           Studio Apartment with Air conditioning
//         </span>
//         <span className="siFeatures">
//           Entire studio 1 bathroom 21m X 21m 1 full bed
//         </span>
//         <span className="siCancelOp">Free Cancellation</span>
//         <span className="siCancelOpSubtitle">
//           You can cancel later, so lock in this great price today
//         </span>
//       </div>
//       <div className="siDetails">
//         <div className="siRating">
//           <span>Excellent</span>
//           <button>8.9</button>
//         </div>
//         <div className="siDetailTexts">
//           <span className="siPrice">$123</span>
//           <span className="siTaxOp">Includes tax and fees</span>
//           <button className="siCheckButton">See Availability</button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default SearchItem

//git hub


import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
