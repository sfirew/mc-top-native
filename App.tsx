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
    primary: '#2a877c',
    // secondary: '#2962ff',
    // accent: '#8c9eff',
    // anchor: '#8c9eff',
    // error: '#b71c1c',
  },
};

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
