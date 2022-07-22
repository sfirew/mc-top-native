import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';
import type { RootStackScreenProps } from '../types';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const ServerListScreen = ({ navigation }: RootStackScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>伺服器列表</Text>
      <Button onPress={() => navigation.push('NotFound')} mode="outlined">go to not found</Button>
    </View>
  );
}

ServerListScreen.title = '伺服器列表';

export default ServerListScreen;
