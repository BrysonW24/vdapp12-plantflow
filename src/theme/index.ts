import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1F2937',
    secondary: '#F59E0B',
    tertiary: '#10B981',
    error: '#B00020',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
    onError: '#FFFFFF',
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#9CA3AF',
    secondary: '#FCD34D',
    tertiary: '#6EE7B7',
    error: '#CF6679',
    background: '#121212',
    surface: '#121212',
    onPrimary: '#000000',
    onSecondary: '#000000',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    onError: '#000000',
  },
};

export const theme = lightTheme;
export { lightTheme, darkTheme };
