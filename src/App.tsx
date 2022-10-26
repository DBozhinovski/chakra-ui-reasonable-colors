import { ChakraProvider, Text } from "@chakra-ui/react";

import {
  // reasonableColorsThemeEnhance,
  reasonableColorsThemeOverride,
} from "./theme";

function App() {
  return (
    <ChakraProvider theme={reasonableColorsThemeOverride}>
      <Text color={"powder.300"}>Hello World</Text>
    </ChakraProvider>
  );
}

export default App;
