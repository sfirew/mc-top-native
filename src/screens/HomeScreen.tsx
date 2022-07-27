import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

// import { Text } from '../components/Themed';
import type { RootStackScreenProps } from '../types';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';
import ScreenWrapper from '../components/Layout/ScreenWrapper';
import SearchBar from '../components/Elements/SearchBar';

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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  grassLogo: {
    width: 200,
    height: 200,
    justifyContent: 'center'
  },
});

const HomeScreen = ({ navigation }: RootStackScreenProps<'Home'>) => {
  const [searchString, setSearching] = React.useState("");

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
    <ScreenWrapper contentContainerStyle={styles.content}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.grassLogo}
          source={require('../../assets/images/Grass_Block.png')}
        />
      </View>

      <Text
        variant="headlineMedium"
        style={{ marginTop: 30, textAlign: 'center', fontWeight: 'bold' }}
      >
        搜尋 Minecraft 伺服器
      </Text>

      <Text
        variant="bodyMedium"
        style={{ marginTop: 20, textAlign: 'center' }}
      >
        輸入 ip 位置或伺服器位址！
      </Text>
      <Text
        variant="bodyMedium"
        style={{ marginTop: 8, textAlign: 'center' }}
      >
        即可查看 Minecraft 伺服器的即時狀態。
      </Text>

      <SearchBar
        searchString={searchString}
        handleSetSearchString={setSearching}
        style={{
          marginTop: 16,
        }}
      />

      <Button
        onPress={() => handleSearch(searchString)}
        mode="outlined"
        style={{ marginTop: 20 }}
      >
        搜尋
      </Button>
    </ScreenWrapper>
  );
}

HomeScreen.title = '首頁';

export default HomeScreen;
