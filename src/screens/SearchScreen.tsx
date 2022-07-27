import React from 'react';
import { StyleSheet } from 'react-native';

import { View, Image } from 'react-native';
import { Text, Button, Avatar, Card, Title, Paragraph, useTheme } from 'react-native-paper';
import type { RootStackScreenProps } from '../types';
import request from '../utils/request';
import ScreenWrapper from '../components/Layout/ScreenWrapper';
import { WebView } from 'react-native-webview';
import BaseCard from '../components/Elements/BaseCard';
import HTMLView from 'react-native-htmlview';
import SearchBar from '../components/Elements/SearchBar';


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
  const theme = useTheme();
  const searchStringFromRoute = route.params && route.params.searchString;
  const [isLoading, setIsLoading] = React.useState(true);
  const [results, setResults] = React.useState<ISearchResult[]>([]);

  React.useEffect(() => {
    const getSearchResults = async () => {
      try {
        console.log('searching servers', searchStringFromRoute);
        const result = await request(`/search?q=${searchStringFromRoute}&type=full`);
        const resultData = result.data as ISearchResult[];

        setResults(resultData);
        setIsLoading(false);
        // console.log('resultData', resultData);
      } catch (error) {
        console.log('error', error);
      }
    }

    getSearchResults();
  }, []);

  const [searchString, setSearchString] = React.useState(searchStringFromRoute || '');

  const handleSearch = (searchString: string) => {
    if (searchString !== '') {
      console.log('you pressed search');
      console.log('string', searchString);

      navigation.push('Search', {
        searchString: searchString,
      });
    }
  }

  return (
    <ScreenWrapper contentContainerStyle={styles.container}>
      <SearchBar
        searchString={searchString}
        handleSetSearchString={setSearchString}
      />

      <Button
        onPress={() => handleSearch(searchString)}
        mode="outlined"
        style={{ marginTop: 20 }}
      >
        搜尋
      </Button>
      {/* {
        results.map((item, index) => <Card key={index}><Text key={index}>JSON.stringify(item)</Text></Card>)
      } */}

  {
    isLoading === true ? (
      <Text>
        Loading...
      </Text>
    ) : results !== [] ? results.map((item, index) => {
      return (
        <BaseCard key={index}>
          <Card.Content>
            <Text variant="titleLarge">{item.name}</Text>
            <Image source={{ uri: item.icon }} style={{ width: 64, height: 64, borderRadius: 5 }} />

            {/* <WebView
                  source={{ html: item.motd }}
                /> */}
            <HTMLView
              value={item.motd}
            />
            <Text>{item.ping} ms</Text>
          </Card.Content>
        </BaseCard>
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
    </ScreenWrapper >
  );
}

SearchScreen.title = '搜尋';

export default SearchScreen;
