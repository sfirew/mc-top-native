import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';
import type { RootStackScreenProps } from '../types';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
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

const MonitorScreen = ({ navigation }: RootStackScreenProps<'SaveList'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>伺服器監視器</Text>
      <Button onPress={() => navigation.push('NotFound')} mode="outlined">go to not found</Button>
    </View>
  );
}

MonitorScreen.title = '伺服器監視器';

export default MonitorScreen;
