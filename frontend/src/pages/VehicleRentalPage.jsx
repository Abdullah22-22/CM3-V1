import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VehicleRentalPage = () => {
  const { id } = useParams();
  const [rental, setRental] = useState(null);

  useEffect(() => {
    const fetchRental = async () => {
      const data = await getVehicleRentals();
      const found = data.find(r => r.id.toString() === id);
      setRental(found);
    };
    fetchRental();
  }, [id]);

  if (!rental) return <p>Loading...</p>;

  return (
    <div className="rental-preview">
      <h2>{rental.vehicleModel}</h2>
      <p>{rental.description}</p>
      <p><strong>Agency:</strong> {rental.agency.name} ({rental.agency.contactEmail})</p>
      <p><strong>Location:</strong> {rental.location.city}, {rental.location.state}</p>
      <p><strong>Price:</strong> ${rental.dailyPrice} / day</p>
      <p><strong>Status:</strong> {rental.availabilityStatus}</p>
      <p><strong>Insurance:</strong> {rental.insurancePolicy}</p>
      <p><strong>Booking Deadline:</strong> {rental.bookingDeadline}</p>
    </div>
  );
};

export default VehicleRentalPage;