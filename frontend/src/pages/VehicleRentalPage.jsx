import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const VehicleRentalPage = () => {

	const { id } = useParams();

	const [loading, setLoading] = useState(true);
	const [rental, setRental] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVehicle = async () => {
			try {
				const res = await fetch(`/api/vehicleRentals/${id}`);
				console.log("ID:", id);
				if (!res.ok) {
					throw new Error("Network response not ok");
				}
				const data = await res.json();
				setRental(data);
			} catch (e) {
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
					<h2>Vehicle Rental Details</h2>
					<h2>{rental.vehicleModel}</h2>
					<p>{rental.description}</p>
					<p><strong>Price:</strong> ${rental.dailyPrice}</p>
				</>
			)}
		</div>
	);
};

export default VehicleRentalPage;