import { themes } from '@storybook/theming';

export const parameters = {
  darkMode: {
    current: 'light',  // Define o tema atual (pode ser 'dark' ou 'light')
    dark: { ...themes.dark, appBg: 'black' },  // Personalize o tema escuro
    light: { ...themes.normal, appBg: 'red' }, // Personalize o tema claro
    classTarget: 'html',  // Aplica as classes ao elemento html
    stylePreview: true,   // Aplica o estilo de visualização no painel
  },
};
export const tags = ['autodocs'];
