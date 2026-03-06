
import { Link } from "react-router-dom";

const VehicleRentalListing = ({ car }) => {
  return (
   
      <div className="rental-preview">
 <Link to={`/${car.id}`} className="car-link">
        <h2>{car.vehicleModel}</h2>
        <p>Category: {car.category}</p>
        <p>Description: {car.description}</p>
        <p>Daily Price: ${car.dailyPrice}</p>
        <p>Status: {car.availabilityStatus}</p>
        <p>Agency: {car.agency?.name}</p>
        <p>Agency Email: {car.agency?.contactEmail}</p>
        <p>Location: {car.location?.city}, {car.location?.state}</p>
        <p>Insurance: {car.insurancePolicy}</p>
        </Link>
      </div>
    
  );
};

export default VehicleRentalListing;
