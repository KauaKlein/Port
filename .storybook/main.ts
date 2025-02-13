import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  // Definindo onde estão suas histórias
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  // Adicionando addons
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    'storybook-dark-mode' // O addon para o modo claro/escuro
  ],

  // Configuração do framework (Next.js)
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },

  // Diretórios estáticos (caso precise de arquivos estáticos como imagens)
  staticDirs: ["../public"],

  // Configurações de TypeScript (se necessário)
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  // Opções de documentação (caso queira customizar)
  docs: {},
};

export default config;
