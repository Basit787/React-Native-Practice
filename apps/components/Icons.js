  import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const Icons = () => {
  const [image, setImage] = useState('');
  const banner = require('../assets/facebook.png');

  const addImage = () => {
    const selectImage = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
      maxHeight: 300,
      maxWidth: 200,
    };

    launchImageLibrary(selectImage, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
        return false;
      } else if (res?.error) {
        console.log('Image picker error: ', res.error);
        return false;
      } else {
        console.log(res.assets[0]);
      }
      setImage(res?.assets[0]);
    });
  };
  return (
    <View>
      <Text>This is icon testing</Text>
      <Icon name="eye" size={30} color="red" />
      <View style={{margin: 50}}>
        <Text>This is Image picker testing</Text>
        <View
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Image
            source={image ? {uri: image?.uri} : banner}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
        <TouchableOpacity onPress={addImage}>
          <Text
            style={{
              backgroundColor: 'blue',
              color: 'white',
              width: 150,
              padding: 10,
              textAlign: 'center',
            }}>
            Add image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Icons;
