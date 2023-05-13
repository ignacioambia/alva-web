import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'gray',
      values: [
        {name: 'gray', value: '#F3F4F8'},
        {name: 'white', value: '#ffffff'},
      ]
    }
  },
};

export default preview;
