import { Button, Card } from "react-bootstrap";
import { Product } from "../../hooks/useProducts";
import useShoppingCart from "../../hooks/useShoppingCart";
import formatCurrency from "../../utilities/formatCurrency";
import "./StoreItem.css";

const StoreItem = ({ id, title, price, images: imgUrl, category }: Product) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    setCategoryProduct,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  setCategoryProduct(category);

  return (
    <Card className="card-item bg-light h-100">
      <Card.Img className="card-image" variant="top" src={imgUrl[0]} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{title}</span>
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
