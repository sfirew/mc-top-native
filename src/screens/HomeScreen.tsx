import { StyleSheet } from 'react-native';

import { Text } from '../components/Themed';
import type { RootStackScreenProps } from '../types';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import ScreenWrapper from '../components/Layout/ScreenWrapper';


const styles = StyleSheet.create({
  content: {
    padding: 12,
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

const HomeScreen = ({ navigation }: RootStackScreenProps<'Home'>) => {
  return (
    <ScreenWrapper contentContainerStyle={styles.content}>
      <Text style={styles.title}>首頁</Text>

      <Card mode="contained" style={{ borderRadius: 24 }}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button onPress={() => { }}>Cancel</Button>
          <Button onPress={() => { }}>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={{ marginTop: 24 }}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button onPress={() => { }}>Cancel</Button>
          <Button onPress={() => { }}>Ok</Button>
        </Card.Actions>
      </Card>

      <Button onPress={() => navigation.push('NotFound')} mode="outlined">go to not found</Button>
    </ScreenWrapper>
  );
}

HomeScreen.title = '首頁';

export default HomeScreen;
