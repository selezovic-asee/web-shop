import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Store from "./pages/Store";
import Trending from "./pages/Trending";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import LogIn from "./pages/LogIn";
import ProtectedRoutes from "./components/ProtectedRoutes";
import User from "./pages/User";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/store" element={<Store />} />
            <Route path="/user" element={<User />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
