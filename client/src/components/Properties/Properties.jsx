import "./properties.css";

const Properties = () => {
  return (
    <div className="prop">
      <div className="propItem">
        <img
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="propImg"
        />
        <span className="propName">Apartment Star Miasto</span>
        <span className="propCity">madrid</span>
        <span className="propPrice">starting from $120</span>
        <div className="propRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="propItem">
        <img
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="propImg"
        />
        <span className="propName">Apartment Star Miasto</span>
        <span className="propCity">madrid</span>
        <span className="propPrice">starting from $120</span>
        <div className="propRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="propItem">
        <img
          src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="propImg"
        />
        <span className="propName">Apartment Star Miasto</span>
        <span className="propCity">madrid</span>
        <span className="propPrice">starting from $120</span>
        <div className="propRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="propItem">
        <img
          src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="propImg"
        />
        <span className="propName">Apartment Star Miasto</span>
        <span className="propCity">madrid</span>
        <span className="propPrice">starting from $120</span>
        <div className="propRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default Properties;

/*
import useFetch from "../../hooks/useFetch";
import "./properties.css";

const Properties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Properties;

*/
