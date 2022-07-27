import React from 'react';

import { Card, useTheme } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export default function BaseCard({
  searchString,
  handleSetSearchString,
  style,
  ...props
}: {
  searchString: string;
  handleSetSearchString: (searchString: string) => void;
  style?: any;
}) {
  const theme = useTheme();

  return (
    <TextInput
      value={searchString}
      onChangeText={text => handleSetSearchString(text)}
      mode="outlined"
      placeholder="Minecraft 伺服器位址 | 名稱 | 版本 | 類型"
      style={{
        ...style,
      }}
      {...props}
    />
  );
}