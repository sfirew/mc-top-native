import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import NotFoundScreen from '../screens/NotFoundScreen';


export const screenList: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  // Home: HomeScreen,
  Test: TestScreen,
  NotFound: NotFoundScreen,
};