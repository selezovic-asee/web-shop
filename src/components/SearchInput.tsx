import { Input, InputGroup, InputLeftElement, Link } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useShoppingCart from "../hooks/useShoppingCart";
import { NavLink, Navigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { inputValue, setInputValue } = useShoppingCart();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setInputValue(ref.current.value);
        }
      }}
    >
      <Nav>
        <Nav.Link to="/store" as={NavLink}>
          <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input
              ref={ref}
              borderRadius={20}
              placeholder="Search products..."
              variant="filled"
              width="20rem"
            />
          </InputGroup>
        </Nav.Link>
      </Nav>
    </form>
  );
};

export default SearchInput;
