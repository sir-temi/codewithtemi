import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import BodyScreen from "./screens/BodyScreen";
import HomePage from "./screens/HomePage";
import AboutMeScreen from "./screens/AboutMeScreen";
import LoginScreen from "./screens/LoginScreen";
import MaintenanceScreen from "./screens/MaintenanceScreen";


const MAINTENANCE_MODE = true;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BodyScreen maintenanceMode={MAINTENANCE_MODE} />}>
        <Route index element={MAINTENANCE_MODE ? <MaintenanceScreen /> : <HomePage />} />
        <Route path="/about" element={<AboutMeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
