import React from 'react';

import { Card, useTheme } from 'react-native-paper';

const BaseCard = ({ ...props }) => {
  const theme = useTheme();
  const { key, style, children } = props;

  return (
    <Card
      key={key}
      mode="contained"
      style={{
        marginTop: 24,
        // backgroundColor: theme.colors.secondaryContainer,
        // backgroundColor: '#eef1ef',
        backgroundColor: '#dae5e2',
        borderRadius: 12,
        ...style
      }}
    >
      {children}
    </Card>
  );
}

export default BaseCard;
