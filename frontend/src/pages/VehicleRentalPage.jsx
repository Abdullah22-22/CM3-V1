import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const VehicleRentalPage = () => {

	const { id } = useParams();
	const [ rental, setRental ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		const fetchVehicle = async () => {
			try {
				const res = await fetch(`/api/vehicleRentals/${id}`);
				if(!res.ok){
					throw new Error("Network response not ok");
				}
				const data = await res.json();
				setRental(data);
			} catch(e) {
				setError(e.message);
			} finally {
				setLoading(false);
			}
		};
		fetchVehicle();
	}, [id]);

  return (
    <div className="rental-preview">
	  {loading ? (
		<p>Loading...</p>
	  ) : error ? (
		<p>{error}</p>
	  ) : (
		<>
	  <h2>{vehicle.model}</h2>
	  <h2></h2>
	  <h2></h2>
	  <h2></h2>
	  <h2></h2>
	   
      <h2>Vehicle Rental Details</h2>

		</>
  )}
    </div>
  );
};

export default VehicleRentalPage;
