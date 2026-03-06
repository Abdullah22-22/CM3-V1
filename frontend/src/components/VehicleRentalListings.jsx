import { useEffect } from "react";
import VehicleRentalListing from "./VehicleRentalListing";
import useCars from "../hooks/UseCar";


const VehicleRentalListings = () => {
  const { cars, fetchCars, loading, error } = useCars();


  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  if (loading) return <p>Loading cars...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="rental-list">
      {cars.map((car) => (
        <VehicleRentalListing key={car._id} car={car} />
      ))}
    </div>
  );
};

export default VehicleRentalListings;
