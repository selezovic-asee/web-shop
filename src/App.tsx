import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import BagList from "./pages/BagList";
import FragrancesList from "./pages/FragrancesList";
import FurnitureList from "./pages/FurnitureList";
import Home from "./pages/Home/Home";
import LaptopsList from "./pages/LaptopsList";
import LightingList from "./pages/LightingList";
import LogIn from "./pages/LogIn/LogIn";
import MotorcycleList from "./pages/MotorcycleList";
import NoPage from "./pages/NoPage";
import Payment from "./pages/Payment/Payment";
import Registration from "./pages/Registration/Registration";
import Store from "./pages/Store";
import SunglassesList from "./pages/SunglassesList";
import Trending from "./pages/Trending/Trending";
import NavBar from "./components/NavBar/NavBar";

/* style={{ borderRadius: "30px" }} and Container*/
function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <div className="bg-white mb-4 p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/store" element={<Store />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route path="/registration" element={<Registration />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/motorcycle" element={<MotorcycleList />} />
          <Route path="/laptops" element={<LaptopsList />} />
          <Route path="/fragnances" element={<FragrancesList />} />
          <Route path="/bag" element={<BagList />} />
          <Route path="/furniture" element={<FurnitureList />} />
          <Route path="/sunglasses" element={<SunglassesList />} />
          <Route path="/lighting" element={<LightingList />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
