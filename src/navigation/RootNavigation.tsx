import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

import { screenList } from './ScreenList';


const Stack = createNativeStackNavigator();



export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          detachPreviousScreen: !navigation.isFocused(),
          header: ({ navigation, route, options, back }) => {
            // console.log('navigation', navigation);
            const title = getHeaderTitle(options, route.name);

            return (
              <Appbar.Header elevated>
                <Appbar.Action
                  icon="menu"
                  isLeading
                  onPress={() =>
                    (
                      navigation as any as DrawerNavigationProp<{}>
                    ).openDrawer()
                  }
                />
                {/* {back ? (
                  <Appbar.BackAction onPress={() => navigation.goBack()} />
                ) : (navigation as any).openDrawer ? (
                  <Appbar.Action
                    icon="menu"
                    isLeading
                    onPress={() =>
                      (
                        navigation as any as DrawerNavigationProp<{}>
                      ).openDrawer()
                    }
                  />
                ) : null} */}
                <Appbar.Content title={title} />
              </Appbar.Header>
            );
          },
        };
      }}
    >
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}

      {(Object.keys(screenList) as Array<keyof typeof screenList>).map((id) => (
        <Stack.Screen
          key={id}
          name={id}
          component={screenList[id]}
          options={{
            title: screenList[id].title,
            animation: 'fade',
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
