import { StyleSheet, TouchableOpacity } from 'react-native';

import { View } from '../components/Themed';
import { Text, Button } from 'react-native-paper';
import type { RootStackScreenProps } from '../types';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const ServerInfoScreen = ({ route, navigation }: RootStackScreenProps<'Server'>) => {
  const host = route.params && route.params.host;

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">伺服器狀態</Text>
      <Text style={{ marginTop: 24, }}>{host || '沒有設定'}</Text>

      <Button onPress={() => {navigation.push('Home')}} style={{ marginTop: 40 }}>回到首頁</Button>
    </View>
  );
}

ServerInfoScreen.title = '伺服器狀態';

export default ServerInfoScreen;
