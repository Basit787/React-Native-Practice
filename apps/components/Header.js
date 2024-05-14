import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={{backgroundColor: 'yellow'}}>
      <Text
        style={{
          padding: 20,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        This is Header Part
      </Text>
    </View>
  );
};

export default Header;
