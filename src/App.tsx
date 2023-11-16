import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import LogIn from "./pages/LogIn";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/store" element={<Store />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
