import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import Account from "./pages/Account";
import FragrancesList from "./pages/FragrancesList";
import GroceriesList from "./pages/GroceriesList";
import Home from "./pages/Home/Home";
import LaptopsList from "./pages/LaptopsList";
import LogIn from "./pages/LogIn";
import SkincareList from "./pages/SkincareList";
import SmartphonesList from "./pages/SmartphonesList";
import Store from "./pages/Store";
import SunglassesList from "./pages/SunglassesList";
import Trending from "./pages/Trending/Trending";
import AutomotiveList from "./pages/AutomotiveList";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/store" element={<Store />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/smartphones" element={<SmartphonesList />} />
          <Route path="/laptops" element={<LaptopsList />} />
          <Route path="/fragnances" element={<FragrancesList />} />
          <Route path="/skincare" element={<SkincareList />} />
          <Route path="/groceries" element={<GroceriesList />} />
          <Route path="/sunglasses" element={<SunglassesList />} />
          <Route path="/automotive" element={<AutomotiveList />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
