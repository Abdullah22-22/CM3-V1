import { useState } from "react";
import { addVehicleRental } from "../api/vehicleRentalApi";

const AddVehicleRentalPage = () => {
  const [vehicleModel, setVehicleModel] = useState("");
  const [category, setCategory] = useState("Economy");
  const [description, setDescription] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [agencyEmail, setAgencyEmail] = useState("");
  const [fleetSize, setFleetSize] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [dailyPrice, setDailyPrice] = useState("");
  const [availabilityStatus, setAvailabilityStatus] = useState("available");
  const [bookingDeadline, setBookingDeadline] = useState("");
  const [insurancePolicy, setInsurancePolicy] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rentalData = {
      vehicleModel,
      category,
      description,
      agency: { name: agencyName, contactEmail: agencyEmail, fleetSize: parseInt(fleetSize) },
      location: { city, state },
      dailyPrice: parseFloat(dailyPrice),
      availabilityStatus,
      bookingDeadline,
      insurancePolicy,
    };

    const res = await addVehicleRental(rentalData);
    if (res.success) {
      setMessage("Vehicle rental added successfully!");
      setVehicleModel(""); setCategory("Economy"); setDescription("");
      setAgencyName(""); setAgencyEmail(""); setFleetSize("");
      setCity(""); setState(""); setDailyPrice("");
      setAvailabilityStatus("available"); setBookingDeadline("");
      setInsurancePolicy("");
    } else {
      setMessage("API unavailable, please try later.");
    }
  };

  return (
    <div className="create">
      <h2>Add a New Vehicle Rental</h2>
      <form onSubmit={handleSubmit}>
        <label>Vehicle Model:</label>
        <input type="text" value={vehicleModel} onChange={e => setVehicleModel(e.target.value)} required />

        <label>Category:</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Economy">Economy</option>
          <option value="Luxury">Luxury</option>
          <option value="SUV">SUV</option>
          <option value="Van">Van</option>
          <option value="Truck">Truck</option>
        </select>

        <label>Description:</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} required />

        <label>Agency Name:</label>
        <input type="text" value={agencyName} onChange={e => setAgencyName(e.target.value)} required />

        <label>Agency Email:</label>
        <input type="email" value={agencyEmail} onChange={e => setAgencyEmail(e.target.value)} required />

        <label>Fleet Size:</label>
        <input type="number" min="0" value={fleetSize} onChange={e => setFleetSize(e.target.value)} />

        <label>City:</label>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} required />

        <label>State:</label>
        <input type="text" value={state} onChange={e => setState(e.target.value)} required />

        <label>Daily Price:</label>
        <input type="number" step="0.01" min="0" value={dailyPrice} onChange={e => setDailyPrice(e.target.value)} required />

        <label>Availability Status:</label>
        <select value={availabilityStatus} onChange={e => setAvailabilityStatus(e.target.value)}>
          <option value="available">Available</option>
          <option value="rented">Rented</option>
          <option value="maintenance">Maintenance</option>
        </select>

        <label>Booking Deadline:</label>
        <input type="date" value={bookingDeadline} onChange={e => setBookingDeadline(e.target.value)} />

        <label>Insurance Policy:</label>
        <input type="text" value={insurancePolicy} onChange={e => setInsurancePolicy(e.target.value)} required />

        <button type="submit">Add Vehicle Rental</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddVehicleRentalPage;