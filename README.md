# Reasonable colors for Chakra UI

## Motivation

Inspired by my [tailwind](https://github.com/DBozhinovski/tailwind-reasonable-colors) port, plus good karma and to learn more about Chakra UI's theming, I've ported the palette to Chakra UI as well. PRs open and contributions are welcome 🍻

## Installation and usage

- `run npm i chakra-ui-reasonable-colors` to install the package.
- The package comes in four flavors: `reasonableColorsThemeOverride` and `reasonableColorsThemeEnhance`
  - `reasonableColorsThemeOverride` overwrites the existing colors of Chakra's palette, where there are collisions and leaves the rest of the default theme intact.
  - `reasonableColorsThemeEnhance` enhances the existing palette, plus plays well with any existing modifications (when combined). All added colors from the reasonable colors palette are prefixed with an `r`. So `pink` becomes `rpink` and can be used, for example, via `rpink.300`.
  - `reasonableColorsFullThemeOverride` does the same thing `reasonableColorsThemeOverride`, but adds the missing variations (50, 700, 800, 900). Generated via https://color-scheme-builder.vercel.app.
  - `reasonableColorsFullThemeEnhance` does the same thing `reasonableColorsThemeEnhance`, but adds the missing variations (50, 700, 800, 900). Generated via https://color-scheme-builder.vercel.app.

## Examples

### Using enhance

#### Partial, original reasonable colors only

```ts
// App.tsx
import { ChakraProvider, Text } from "@chakra-ui/react";

import { reasonableColorsThemeEnhance } from "./theme";

function App() {
  return (
    <ChakraProvider theme={reasonableColorsThemeEnhance}>
      <Text color={"rpowder.300"}>Hello World</Text>
    </ChakraProvider>
  );
}

export default App;
```

#### Full, with generated variations for (50, 700, 800 and 900)

```ts
// App.tsx
import { ChakraProvider, Text } from "@chakra-ui/react";

import { reasonableColorsFullThemeEnhance } from "./theme";

function App() {
  return (
    <ChakraProvider theme={reasonableColorsFullThemeEnhance}>
      <Text color={"rpowder.50"}>Hello World</Text>
    </ChakraProvider>
  );
}

export default App;
```

### Using override

#### Partial, original reasonable colors only:

```ts
// App.tsx
import { ChakraProvider, Text } from "@chakra-ui/react";

import { reasonableColorsThemeOverride } from "./theme";

function App() {
  return (
    <ChakraProvider theme={reasonableColorsThemeOverride}>
      <Text color={"powder.300"}>Hello World</Text>
    </ChakraProvider>
  );
}

export default App;
```

#### Full, with generated variations for (50, 700, 800 and 900)

```ts
// App.tsx
import { ChakraProvider, Text } from "@chakra-ui/react";

import { reasonableColorsFullThemeOverride } from "./theme";

function App() {
  return (
    <ChakraProvider theme={reasonableColorsFullThemeOverride}>
      <Text color={"powder.50"}>Hello World</Text>
    </ChakraProvider>
  );
}

export default App;
```

## Credits

- https://reasonable.work/colors/ (also has an explanation on the reasoning behind the limited variations).