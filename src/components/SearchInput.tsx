import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useShoppingCart from "../hooks/useShoppingCart";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setInputValue, setExpanded } = useShoppingCart();
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

  const handleSearchInput = () => {
    setInputValue("");
    setExpanded(false);
  };

  return windowSize[0] < 400 ? (
    <form
      onClick={() => handleSearchInput()}
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
              placeholder="Search..."
              variant="filled"
              width="7rem"
              className="pe-0"
              onClick={() => setInputValue("")}
            />
          </InputGroup>
        </Nav.Link>
      </Nav>
    </form>
  ) : windowSize[0] < 528 ? (
    <form
      onClick={() => handleSearchInput()}
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
              placeholder="Search..."
              variant="filled"
              width="12rem"
              onClick={() => setInputValue("")}
            />
          </InputGroup>
        </Nav.Link>
      </Nav>
    </form>
  ) : (
    <form
      onClick={() => handleSearchInput()}
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
              placeholder="Search..."
              variant="filled"
              width="20rem"
              onClick={() => setInputValue("")}
            />
          </InputGroup>
        </Nav.Link>
      </Nav>
    </form>
  );
};

export default SearchInput;
