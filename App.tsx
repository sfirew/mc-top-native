import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';

import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    elevation: {
      "level0": "transparent",
      "level1": "rgb(247, 243, 249)",
      "level2": "rgb(243, 237, 246)",
      "level3": "rgb(238, 232, 244)",
      "level4": "rgb(236, 230, 243)",
      "level5": "rgb(233, 227, 241)",
    },

    primary: '#2a877c',
    primaryContainer: '#73f8e6',
    onPrimaryContainer: '#00201c',

    secondary: '#4a635f',
    secondaryContainer: '#cce8e2',
    onSecondaryContainer: '#05201c',

    tertiary: '#46617a',
    tertiaryContainer: '#ffffff',
    onTertiaryContainer: '#cce5ff',

    error: '#ba1a1a',
    background: '#fafdfb',
  },
};

// console.log('DefaultTheme', DefaultTheme.colors);

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation />
          {/* <StatusBar /> */}
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
