import React from 'react';
import {Text, View} from 'react-native';

const Footer = () => {
  const date = new Date();
  return (
    <View style={{backgroundColor: 'yellow'}}>
      <Text style={{textAlign: 'center', fontSize: 15}}>
        All rights are reserved, {date.getFullYear()}
      </Text>
    </View>
  );
};

export default Footer;
