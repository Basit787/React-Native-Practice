import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = ({navigation}) => {
  const [credName, setCredName] = useState('');
  const [credPass, setCredPass] = useState('');

  const [showPass, setShowPass] = useState(true);

  const data = {};
  data.name = credName;
  data.credPass = credPass;

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={{height: 250, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}>
          This is testing phase
        </Text>
        <Text style={{color: 'white', padding: 10}}>This is testing phase</Text>
      </ImageBackground>
      <View>
        <TextInput
          name="username"
          value={credName}
          onChangeText={setCredName}
          placeholder="Enter Your Name"
          style={{
            borderColor: 'black',
            height: 50,
            borderWidth: 1,
            margin: 20,
            padding: 10,
            color: 'black',
            borderRadius: 4,
          }}
          label="UserName"
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: 'black',
            height: 50,
            borderWidth: 1,
            margin: 20,
            color: 'black',
            borderRadius: 4,
          }}>
          <TextInput
            name="password"
            value={credPass}
            onChange={setCredPass}
            placeholder="Enter Your Password"
            secureTextEntry={showPass}
            style={[
              {
                maxWidth: 250,
                position: 'relative',
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => {
              setShowPass(!showPass);
            }}>
            <Text style={{paddingHorizontal: 10}}>
              {showPass ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            borderRadius: 4,
          }}>
          <Text
            style={{color: 'white', padding: 10, fontSize: 20}}
            onPress={handleSubmit}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View /> */}

      <View style={{borderTopWidth: 1, borderColor: 'black'}}>
        <Text
          style={{
            textAlign: 'center',
            padding: 10,
          }}>
          Or continue with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 20,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/facebook.png')}
              style={{height: 50, width: 50, borderRadius: 50}}
              accessible={true}
              accessibilityLabel="This is facebook Login"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/google.png')}
              style={{height: 50, width: 50, borderRadius: 50}}
              accessible={true}
              accessibilityLabel="This is Google Login"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/apple.png')}
              style={{height: 50, width: 50, borderRadius: 50}}
              accessible={true}
              accessibilityLabel="This is Apple Login"
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
