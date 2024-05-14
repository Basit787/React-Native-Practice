import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const DataPassInComponent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [finalName, setFinaleName] = useState('');
  const [finalAge, setFinaleAge] = useState('');

  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setFinaleName(name);
    setName('');
    setFinaleAge(age);
    setAge('');
    setSubmit(true);
  };
  return (
    <View>
      <View>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter Your Name"
          style={{
            borderWidth: 1,
            marginHorizontal: 30,
            marginTop: 20,
            borderRadius: 5,
          }}
        />
        <TextInput
          value={age}
          onChangeText={setAge}
          placeholder="Enter Your Age"
          inputMode="numeric"
          style={{
            borderWidth: 1,
            marginHorizontal: 30,
            marginTop: 20,
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              borderWidth: 1,
              width: 100,
              padding: 10,
              textAlign: 'center',
              marginTop: 20,
            }}
            onPress={handleSubmit}>
            Submit
          </Text>
        </TouchableOpacity>
        {submit && (
          <View>
            <Text>My name is {finalName}</Text>
            <Text>My age is {finalAge}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default DataPassInComponent;
