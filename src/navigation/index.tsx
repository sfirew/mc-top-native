import * as React from 'react';

import { NavigationContainer, InitialState, } from '@react-navigation/native';
import { MD3LightTheme, MD3DarkTheme, } from 'react-native-paper';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { StatusBar } from 'expo-status-bar';
// import { isWeb } from '../utils';

import RootNavigator from './RootNavigation';
import DrawerItems from './DrawerItems';



const PERSISTENCE_KEY = 'NAVIGATION_STATE';
const PREFERENCES_KEY = 'APP_PREFERENCES';



export const PreferencesContext = React.createContext<any>(null);



const Drawer = createDrawerNavigator<{ Root: undefined }>();



export default function Navigation() {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const themeMode = isDarkMode ? 'dark' : 'light';
  const theme = {
    light: MD3LightTheme,
    dark: MD3DarkTheme,
  }[themeMode];

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString || '');

        setInitialState(state);
      } catch (e) {
        // ignore error
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  const preferences = React.useMemo(
    () => ({
      goToScreen: () => { },
    }),
    []
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <NavigationContainer initialState={initialState}>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerItems {...props} />}
          useLegacyImplementation={true}
        >
          <Drawer.Screen
            name="Root"
            component={RootNavigator}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>

        {/* <RootNavigator /> */}

        <StatusBar style={theme.dark ? 'light' : 'dark'} />
      </NavigationContainer>
    </PreferencesContext.Provider>
  );
}
