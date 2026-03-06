import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const VehicleRentalPage = () => {

    const { id } = useParams();
	const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [rental  , setRental] = useState(null);
    const [error    , setError] = useState(null);

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

	useEffect(() => {
		const deleteVehicle = async() => {
			const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
			if(!confirmDelete) return;

			try {
				await fetch(`http://localhost:4000/api/vehicleRentals/${id}`, {
					method: "DELETE",
				});
				console.log("Listing deleted");
				navigate("/");
			} catch(e) {
				setError(e.message);
				console.error(e);
			} finally { setLoading(false); }
		}
		deleteVehicle();
	}, []);

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
                    <p>Category: {rental.category}</p>
                    <p>Description: {rental.description}</p>
                    <p>Daily Price: ${rental.dailyPrice}</p>
                    <p>Status: {rental.availabilityStatus}</p>
                    <p>Agency: {rental.agency?.name}</p>
                    <p>Agency Email: {rental.agency?.contactEmail}</p>
                    <p>Location: {rental.location?.city}, {rental.location?.state}</p>
                    <p>Insurance: {rental.insurancePolicy}</p>
                </>
            )}
        </div>
    );
};

export default VehicleRentalPage;
