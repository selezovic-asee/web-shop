import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import useShoppingCart from "../hooks/useShoppingCart";

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
      {inputValue && <Navigate to="/search-product" />}
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
    </form>
  );
};

export default SearchInput;
