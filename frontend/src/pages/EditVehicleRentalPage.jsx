import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVehicleRentals, addVehicleRental } from "../api/vehicleRentalApi";

const EditVehicleRentalPage = () => {
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
    <div className="create">
      <h2>Edit Vehicle Rental (Not fully implemented)</h2>
      <p>You can later add form inputs prefilled with rental data here.</p>
      <pre>{JSON.stringify(rental, null, 2)}</pre>
    </div>
  );
};

export default EditVehicleRentalPage;