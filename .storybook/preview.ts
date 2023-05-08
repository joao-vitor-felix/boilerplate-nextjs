import { GlobalStyles } from '../src/styles/GlobalStyles';
import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'fullscreen',
  },
  decorators: [withThemeFromJSXProvider({GlobalStyles})]
};

export default preview;
