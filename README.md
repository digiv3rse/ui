# @digiv3rse/ui

React component library for Alethio apps.

*NOTICE*: The master branch hosts the latest development version (v2.x). For the legacy 1.x version, please see the [v1](../../tree/v1) branch.

## Prerequisites

- Node 8+ for development
- ES2015+ compliant browser for runtime

## Installation

1. `npm i @digiv3rse/ui`
2. Copy the `public/css` and `public/fonts` folders into your root app folder and import the CSS files in your index.html.
3. In your root App component, create a theme and pass it to styled-components provider:

```tsx
import * as React from "react";
import { ThemeProvider } from "@digiv3rse/ui/lib/styled-components";
import { createPalette } from "@digiv3rse/ui/lib/theme/createPalette";
import { createTheme } from "@digiv3rse/ui/lib/theme/createTheme";

class App extends React.Component {
    private theme = createTheme(createPalette());

    render() {
        return <ThemeProvider theme={this.theme}>
            { /* ... stuff ... */ }
        </ThemeProvider>
    }
}
```

### Server-side rendering

The library uses react-uid to generate some unique IDs for svg icon markup. For SSR to work properly, you will need to include the [UIDReset](./uid/UIDReset.tsx) component at the root of you app component.

Server:
```tsx
import { UIDReset } from "@digiv3rse/ui/lib/uid/UIDReset";

// ...
ReactDOM.renderToString(<UIDReset><App /></UIDReset>));
```

Client:
```tsx
import { UIDReset } from "@digiv3rse/ui/lib/uid/UIDReset";

//..
ReactDOM.render(<UIDReset><App /></UIDReset>)
```

You can also import [UIDConsumer](./id/UIDConsumer.tsx) component for general use in your app. The `UIDReset` component is only needed for SSR. The main difference between these components and the components found in `react-uid` is that they work when multiple instances of the library are imported (e.g. multiple applications/plugins running on the same page)

## Usage

Just import any component with `import { ... } from "@digiv3rse/ui/lib/path/to/Component"`.

**NOTE**: Internal components are marked as `@internal` and/or are placed in `internal/` sub-folders. Never use them directly in production.

## Playground

You can see the components in action [here](https://alethio.github.io/ui).

## Development

1. `npm install`
2. `npm run build` for minified build or `npm run watch` for incremental development/debug build.

## Project structure
```
📁
├─📁lib            - target folder that contains built/transpiled components
├─📁public         - static assets (css and fonts) that should be served by the consumer app
└─📁src            - source files
  ├─📁control      - UI controls / widgets
  ├─📁data         - components for displaying and formatting various types of data
  ├─📁fx           - Effects and animations
  ├─📁icon         - icon components (SVG or icon font wrappers)
  └─📁layout       - components for layout / arrangement
```

## Theming

The library uses a styled-component theme, which you can directly access in your styled components. If using TypeScript, we also provide e re-export of styled-components library (which is a peer dependency) that uses a typed [ITheme](./src/theme/ITheme.ts) interface.

```ts
import * as styled from "@digiv3rse/ui/lib/styled-components";

const MyLinkComponent = styled.div`
    color: ${props => props.theme.colors.link};
`;
```

## Managing SVG icons

Original SVG sources should be kept in the `dev/original-svg` folder. To create SVG icon components from them, the following steps should be taken:

1. Copy the SVG markup in the render method of a new React component
2. Replace all dash (-) attributes with camelCase
3. Remove any unneeded attributes or run the SVG through an optimizer tool
4. The viewBox of the icon should be a square. If needed use `<g transform="translate(x,y)">` to center the icon in the new viewBox. This allows proper sizing via `size` prop
5. Replace the main fill/stroke color with `currentColor`, to ensure proper cascading, or parametrize if more than one color
6. The resulting component should be configured with a size prop that applies to both width and height

## Release process

1. Make sure you are a maintainer and you are on an up-to-date master branch.
2. Update `node_modules` (npm i).
3. Update & commit the CHANGELOG.MD by adding an entry for the desired version
4. `npm version prerelease`
5. `git push`
6. `git push --tags --no-verify`
7. `npm publish --tag next`
