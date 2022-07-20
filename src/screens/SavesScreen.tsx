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

const SaveListScreen = ({ navigation }: RootStackScreenProps<'SaveList'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>收藏列表</Text>
      <Button onPress={() => navigation.push('NotFound')} mode="outlined">go to not found</Button>
    </View>
  );
}



SaveListScreen.title = '收藏';



export default SaveListScreen;
