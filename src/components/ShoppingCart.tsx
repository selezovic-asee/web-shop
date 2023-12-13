import { Button, Nav, Offcanvas, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../hooks/useShoppingCart";
import formatCurrency from "../utilities/formatCurrency";
import CartItem from "./CartItem/CartItem";

interface Props {
  isOpen: boolean;
}

const ShoppingCart = ({ isOpen }: Props) => {
  const { closeCart, cartItems, data: products, profile } = useShoppingCart();

  const total = () => {
    return formatCurrency(
      cartItems.reduce((total, cartItem) => {
        const item = products.find((item) => item.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
      }, 0)
    );
  };

  const cart = total();

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
          <div className="ms-auto fw-bold fs-5">
            Total {cart}
            {/* {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )} */}
          </div>
        </Stack>
        <Nav>
          {!profile ? (
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
