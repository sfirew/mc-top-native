import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from 'react-native';
import { Text, Button, Avatar, Card, Title, Paragraph } from 'react-native-paper';
import type { RootStackScreenProps } from '../types';
import request from '../utils/request';
import ScreenWrapper from '../components/Layout/ScreenWrapper';
import { WebView } from 'react-native-webview';


const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

interface ISearchResult {
  host: string;
  icon: string;
  name: string;
  motd: string;
  motdCleaned: string;
  info: string;
  onlinePlayers: number;
  maxPlayers: number;
  ping: number;
}

const SearchScreen = ({ route, navigation }: RootStackScreenProps<'Search'>) => {
  const searchString = route.params && route.params.searchString;
  const [results, setResults] = React.useState<ISearchResult[]>([]);

  React.useEffect(() => {
    const getSearchResults = async () => {
      try {
        console.log('searching servers', searchString);
        const result = await request(`/search?q=${searchString}&type=full`);
        const resultData = result.data as ISearchResult[];

        setResults(resultData);
        // console.log('resultData', resultData);
      } catch (error) {
        console.log('error', error);
      }
    }

    getSearchResults();
  }, []);

  return (
    <ScreenWrapper contentContainerStyle={styles.container}>
      <Text variant="titleLarge">搜尋</Text>
      <Text style={{ marginTop: 24, }}>{searchString || '沒有設定'}</Text>

      {/* {
        results.map((item, index) => <Card key={index}><Text key={index}>JSON.stringify(item)</Text></Card>)
      } */}

      {
        results !== [] ? results.map((item, index) => {
          return (
            <View key={index}>
              <WebView
                source={{ html: item.motd }}
              />
            </View>
          );
          // return (
          //   <Card key={index} mode="contained" style={{ marginTop: 24, }}>
          //     <Card.Content>
          //       <Title>{item.name}</Title>
          //       <WebView
          //         source={{ html: item.motd }}
          //       />
          //       <Paragraph>{item.motdCleaned}</Paragraph>
          //     </Card.Content>
          //   </Card>
          // );
        }) : <Text variant="bodyMedium">沒有結果</Text>
      }

      <Button onPress={() => { navigation.push('Home') }} style={{ marginTop: 40 }}>回到首頁</Button>
    </ScreenWrapper>
  );
}

SearchScreen.title = '搜尋';

export default SearchScreen;
