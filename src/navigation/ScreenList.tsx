import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SaveListScreen from '../screens/SavesScreen';
import TestScreen from '../screens/TestScreen';
import NotFoundScreen from '../screens/NotFoundScreen';


export const screenList: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  Test: TestScreen,
  SaveList: SaveListScreen,
  Home: HomeScreen,
  NotFound: NotFoundScreen,
};