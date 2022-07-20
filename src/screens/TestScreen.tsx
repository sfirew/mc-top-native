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

const TestScreen = ({ navigation }: RootStackScreenProps<'Test'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Home Screen.</Text>
      <Button onPress={() => navigation.push('NotFound')} mode="outlined">go to not found</Button>
    </View>
  );
}



TestScreen.title = '測試';



export default TestScreen;
