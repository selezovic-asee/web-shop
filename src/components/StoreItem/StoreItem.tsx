import { Button, Card } from "react-bootstrap";
import formatCurrency from "../../utilities/formatCurrency";
import useShoppingCart from "../../hooks/useShoppingCart";
import "./StoreItem.css";
import { Product } from "../../hooks/useProducts";

const StoreItem = ({ id, title, price, images: imgUrl }: Product) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="bg-light h-100">
      <Card.Img
        variant="top"
        src={imgUrl[0]}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add to cart
            </Button>
          ) : (
            <div className="first d-flex align-items-center flex-column">
              <div className="second d-flex align-items-center justify-content-center">
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
