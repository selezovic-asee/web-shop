import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

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

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap" className="mb-0">
        {windowSize[0] > 425 && <p>Dark Mode</p>}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
