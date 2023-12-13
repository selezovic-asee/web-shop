import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../hooks/useShoppingCart";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setInputValue } = useShoppingCart();
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize[0] <= 768 ? (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setInputValue(ref.current.value);
          ref.current.value = "";
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
              width="7rem"
            />
          </InputGroup>
        </Nav.Link>
      </Nav>
    </form>
  ) : (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setInputValue(ref.current.value);
          ref.current.value = "";
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
  // <form
  //   onSubmit={(event) => {
  //     event.preventDefault();
  //     if (ref.current) {
  //       setInputValue(ref.current.value);
  //       ref.current.value = "";
  //     }
  //   }}
  // >
  //   <Nav>
  //     <Nav.Link to="/store" as={NavLink}>
  //       <InputGroup>
  //         <InputLeftElement children={<BsSearch />} />
  //         <Input
  //           ref={ref}
  //           borderRadius={20}
  //           placeholder="Search products..."
  //           variant="filled"
  //           width="20rem"
  //         />
  //       </InputGroup>
  //     </Nav.Link>
  //   </Nav>
  // </form>
};

export default SearchInput;
