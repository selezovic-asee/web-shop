import { Button, Stack } from "react-bootstrap";
import useShoppingCart from "../../hooks/useShoppingCart";
import formatCurrency from "../../utilities/formatCurrency";
import "./CartItem.css";

interface Props {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: Props) => {
  const { removeFromCart, data } = useShoppingCart();
  const item = data.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img className="cart-image" src={item.images[0]} alt="picture" />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="quantity-display text-muted">x{quantity}</span>
          )}
        </div>
        <div className="price-display text-muted">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
// function useAuthentication() {
//   throw new Error("Function not implemented.");
// }
