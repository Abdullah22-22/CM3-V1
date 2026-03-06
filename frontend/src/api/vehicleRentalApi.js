const API_URL = "http://localhost:5000/api/vehicleRentals";

export async function getVehicleRentals() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch vehicle rentals");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function addVehicleRental(data) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to add vehicle rental");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}