import * as React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  Badge,
  Drawer,
  useTheme,
  MD3Colors,
} from 'react-native-paper';



const DrawerItemsData = [
  {
    label: '首頁',
    icon: 'home-outline',
    key: 0,
    link: 'Home',
    // right: () => <Text variant="labelLarge">44</Text>,
  },
  {
    label: '伺服器列表',
    icon: 'format-list-bulleted',
    key: 1,
    link: 'Home',
  },
  {
    label: '統計資料',
    icon: 'chart-bell-curve-cumulative',
    key: 2,
    link: 'Home',
  },
  {
    label: '伺服器監視器',
    icon: 'server',
    key: 3,
    link: 'Home',
  },
  {
    label: '收藏',
    icon: 'bookmark-outline',
    key: 4,
    link: 'SaveList',
  },
  // {
  //   label: 'Starred',
  //   icon: 'star',
  //   key: 1,
  //   right: ({ color }: { color: string }) => (
  //     <Badge
  //       visible
  //       size={8}
  //       style={[styles.badge, { backgroundColor: color }]}
  //     />
  //   ),
  // },
  // { label: 'Sent mail', icon: 'send', key: 2 },
  // { label: 'Colored label', icon: 'palette', key: 3 },
  // {
  //   label: 'A very long title that will be truncated',
  //   icon: 'delete',
  //   key: 4,
  //   right: () => <Badge visible size={8} style={styles.badge} />,
  // },
];



const DrawerItems = ({ ...props }: DrawerContentComponentProps) => {
  const { navigation } = props;
  // const navigation = useNavigation();

  const [drawerItemIndex, setDrawerItemIndex] = React.useState<number>(0);

  const _setDrawerItem = (index: number) => setDrawerItemIndex(index);

  const { colors } = useTheme();

  // console.log('colors', colors);
  // console.log('MD3Colors', MD3Colors);

  const coloredLabelTheme = {
    colors: {
      // secondaryContainer: MD3Colors.neutral90,
      secondaryContainer: MD3Colors.neutralVariant90,
      onSecondaryContainer: MD3Colors.tertiary20,
    }
  };

  return (
    <DrawerContentScrollView
      alwaysBounceVertical={false}
      style={[
        styles.drawerContent,
        {
          backgroundColor: colors.surface,
        },
      ]}
    >
      <Drawer.Section title="MC TOP">
        {DrawerItemsData.map((props, index) => (
          <Drawer.Item
            {...props}
            key={props.key}
            theme={props.key === drawerItemIndex ? coloredLabelTheme : undefined}
            active={drawerItemIndex === index}
            onPress={() => {
              _setDrawerItem(index);

              navigation.navigate(props.link || 'Home');
            }}
          />
        ))}
      </Drawer.Section>

    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  v3Preference: {
    height: 56,
    paddingHorizontal: 28,
  },
  badge: {
    alignSelf: 'center',
  },
});

export default DrawerItems;