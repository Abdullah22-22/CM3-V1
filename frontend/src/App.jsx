import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from "react-router-dom";

// Pages & Components
import HomePage from "./pages/HomePage";
import AddVehicleRentalPage from "./pages/AddVehicleRentalPage";
import EditVehicleRentalPage from "./pages/EditVehicleRentalPage";
import VehicleRentalPage from "./pages/VehicleRentalPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

const Layout = () => (
  <>
    <Navbar />
    <div className="content">
      <Outlet />
    </div>
  </>
);

// Router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="add-rental" element={<AddVehicleRentalPage />} />
      <Route path="rental/:id" element={<VehicleRentalPage />} />
      <Route path="edit-rental/:id" element={<EditVehicleRentalPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;