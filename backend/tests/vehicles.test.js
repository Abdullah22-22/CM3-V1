/*import request from "supertest";

import app from "../app.js";
*/
const request = require("supertest");
const app = require("../app.js");

describe("Vehicle rental API", () => {
	test("GET /api/vehicleRentals should return 200", async () => {
		const res = await request(app).get("/api/vehicleRentals");
		expect(res.statusCode).toBe(200);
	});

	test("POST /api/vehicleRentals should create listing", async () => {
		const rental = {
			vehicleModel: "Toyota Corolla",
			description: "Is a car",
			dailyprice: 50,
			availibilityStatus: "available",
		};
		const res = await request(app)
		.post("/api/vehicleRentals")
		.send(rental);

		expect(res.statusCode).toBe(201);
		expect(res.body.vehicleModel).toBe("Toyota Corolla");
	});

	test("GET /api/vehicleRentals/:id should return listing", async () => {
		const rental = await request(app)
		.post("/api/vehicleRentals")
		.send({
			vehicleModel: "Honda Civic",
			description: "A car",
			dailyPrice: 45,
			availabilityStatus: "available",
		});

		const id = rental.body._id;
		const res = await request(app).get(`/api/vehicleRentals/${id}`);
		expect(res.statusCode).toBe(200);
		expect(res.body._id).toBe(id);
	});

	test("PUT /api/vehicleRentals/:id should update listing", async () => {
		const rental = await request(app)
		.post("/api/vehicleRentals")
		.send({
			vehicleModel: "BMW M3",
			description: "Another car",
			dailyPrice: 120,
			availabilityStatus: "available",
		});

		const res = await request(app)
		.put(`/api/vehicleRentals/${rental.body._id}`)
		.send({
			dailyPrice: 100,
		});

		expect(res.statusCode).toBe(200);
		expect(res.body.dailyPrice).toBe(100);
	});

	test("DELETE /api/vehicleRentals/:id should delete listing", async () => {
		const rental = await request(app)
		.post("/api/vehicleRentals")
		.send({
			vehicleModel: "Audi A4",
			description: "Last car",
			dailyPrice: 110,
			availabilityStatus: "available",
		});

		const res = await request(app)
		.delete(`/api/vehicleRentals/${rental.body._id}`);
		expect(res.statusCode).toBe(200);
	});
});
