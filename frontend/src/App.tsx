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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BodyScreen />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutMeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
