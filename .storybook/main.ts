import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      },
    },
    "@storybook/addon-onboarding"
  ],
  "framework": {
    name: "@storybook/vue3-vite",
    options: {}
  }
};
export default config;