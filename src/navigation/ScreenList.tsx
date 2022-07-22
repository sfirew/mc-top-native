import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import ServerListScreen from '../screens/ServerListScreen';
import SaveListScreen from '../screens/SavesScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import StatisticalScreen from '../screens/StatisticalScreen';
import MonitorScreen from '../screens/MonitorScreen';

export const screenList: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  Home: HomeScreen,
  Statistical: StatisticalScreen,
  ServerList: ServerListScreen,
  Monitor: MonitorScreen,
  SaveList: SaveListScreen,
  NotFound: NotFoundScreen,
};
