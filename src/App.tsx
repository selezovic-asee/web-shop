import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import Account from "./pages/Registration/Registration";
import AutomotiveList from "./pages/LightingList";
import FragrancesList from "./pages/FragrancesList";
import GroceriesList from "./pages/FurnitureList";
import Home from "./pages/Home/Home";
import LaptopsList from "./pages/LaptopsList";
import MyAccount from "./pages/LogIn/LogIn";
import NoPage from "./pages/NoPage";
import SkincareList from "./pages/BagList";
import MotorcycleList from "./pages/MotorcycleList";
import Store from "./pages/Store";
import SunglassesList from "./pages/SunglassesList";
import Trending from "./pages/Trending/Trending";
import LightingList from "./pages/LightingList";
import FurnitureList from "./pages/FurnitureList";
import BagList from "./pages/BagList";
import LogIn from "./pages/LogIn/LogIn";
import LogOut from "./pages/Registration/Registration";
import Payment from "./components/Payment";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="bg-white mb-4">
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
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
