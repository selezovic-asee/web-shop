import { Button, Nav, Offcanvas, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../hooks/useShoppingCart";
import formatCurrency from "../utilities/formatCurrency";
import CartItem from "./CartItem/CartItem";

//treba biti IShoppingCartProps
interface Props {
  isOpen: boolean;
}

const ShoppingCart = ({ isOpen }: Props) => {
  const {
    closeCart,
    cartItems,
    data: products,
    profile,
    setInputValue,
  } = useShoppingCart();

  const total = () => {
    return formatCurrency(
      cartItems.reduce((total, cartItem) => {
        const item = products.find((item) => item.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
      }, 0)
    );
  };

  //fali computed state
  const cart = total();

  //false useCallback
  const storeBtn = () => {
    setInputValue("");
    closeCart();
  };

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3} className="mb-3">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          {cart === "$0.00" && (
            <h4 className="text-center">Your cart is empty.</h4>
          )}
          <div className="ms-auto fw-bold fs-5">Total {cart}</div>
        </Stack>
        <Nav>
          {/*  === $0.00 nije dobro, uvijek trebaš imati jedinicu koja je samo broj i uvijek moraš moći dođi do nje ovo miješa display i logiku */}
          {/* ovo ifanje izbjegavati potpuno je nečitko, bolje razbiti u više funkcija kako bi imao jasan flow */}
          {cart === "$0.00" ? (
            <Nav className="d-flex align-items-center">
              <Nav.Link to="/store" as={NavLink}>
                <Button onClick={() => storeBtn()}>Go to shop!</Button>
              </Nav.Link>
            </Nav>
          ) : !profile ? (
            <Nav.Link to="/log-in" as={NavLink} onClick={() => closeCart()}>
              <Button>Complete your purchase.</Button>
            </Nav.Link>
          ) : (
            <Nav.Link to="/payment" as={NavLink} onClick={() => closeCart()}>
              <Button>Complete your purchase.</Button>
            </Nav.Link>
          )}
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
