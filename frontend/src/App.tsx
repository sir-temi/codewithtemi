import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import BodyScreen from "./screens/BodyScreen";
import HomePage from "./screens/HomePage";
import AboutMeScreen from "./screens/AboutMeScreen";
// import LoginScreen from "./screens/LoginScreen";
import MaintenanceScreen from "./screens/MaintenanceScreen";
import RegistrationPage from "./screens/RegisterScreen";
import AboutMentorship from "./screens/AboutMentorship";

const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE;

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={<BodyScreen maintenanceMode={MAINTENANCE_MODE} />}
            >
                <Route
                    index
                    element={
                        MAINTENANCE_MODE ? <MaintenanceScreen /> : <HomePage />
                    }
                />
                <Route path="/about" element={<AboutMeScreen />} />
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/mentorship" element={<AboutMentorship />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
