# Vehicle Rental Project

## Project Idea

This project is a fullstack Vehicle Rental application that allows users to view, create, edit, and delete vehicle rental listings. It is built using React for the frontend and Node.js/Express for the backend with MongoDB as the database.

---

## My Contribution (Armin)

I contributed to the frontend and API integration for the Vehicle Rentals module.

Specifically, I created the following pages:

1. **AddVehicleRentalPage.jsx** – Form to add a new vehicle rental based on the project data model.
2. **VehicleRentalPage.jsx** – Page to display details of a single vehicle rental.
3. **EditVehicleRentalPage.jsx** – Page for updating an existing vehicle rental.

These pages are connected to the project routing and prepared for backend API integration.

---

## Code (Calculator Example)

```javascript
class Calculator {
  constructor() {
    this.value = 0;
  }

  reset() {
    this.value = 0;
  }

  add(number) {
    if (number < 0) {
      throw new Error("Negative numbers are not allowed");
    }
    this.value += number;
  }

  getValue() {
    return this.value;
  }
}
```
