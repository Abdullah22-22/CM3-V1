import { useEffect, useState } from "react";
import { getVehicleRentals } from "../api/vehicleRentalApi";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchRentals = async () => {
      const data = await getVehicleRentals();
      setRentals(data);
    };
    fetchRentals();
  }, []);

  return (
    <div className="rental-list">
      {rentals.map((rental, index) => (
        <div className="rental-preview" key={index}>
          <h2>{rental.vehicleModel}</h2>
          <p>{rental.description}</p>
          <p>
            <strong>Agency:</strong> {rental.agency.name} ({rental.agency.contactEmail})
          </p>
          <p>
            <strong>Location:</strong> {rental.location.city}, {rental.location.state}
          </p>
          <p>
            <strong>Price:</strong> ${rental.dailyPrice} / day
          </p>
          <p>
            <strong>Status:</strong> {rental.availabilityStatus}
          </p>
          <Link to={`/rental/${rental.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;