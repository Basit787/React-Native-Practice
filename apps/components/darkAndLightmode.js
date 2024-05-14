import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';

const DarkAndLightMode = () => {
  const [creds, setCreds] = useState({
    username: '',
    password: '',
  });

  const [darkMode, setDarkMode] = useState(false); //darkMode on and off

  const [mode, setMode] = useState('light'); //light mode and dark mode

  useEffect(() => {
    {
      darkMode ? setMode('dark') : setMode('light');
    }
    // console.log(dimensions.width);
  }, [darkMode]);

  const handleChange = e => {
    const updatedCred = JSON.parse(JSON.stringify(creds));
    updatedCred[e.nativeEvent.target] = e.nativeEvent.text;
    setCreds(e.nativeEvent.text);
  };

  const [showPass, setShowPass] = useState(true);

  const handleSubmit = () => {
    console.log(creds);
  };

  //color scheme shortcuts

  const colorScheme = useColorScheme();

  const themeBackgroundColor =
    colorScheme === mode
      ? {backgroundColor: 'white'}
      : {backgroundColor: 'black'};

  const themeColor = colorScheme === mode ? {color: 'black'} : {color: 'white'};

  const themeBorderColor =
    colorScheme === mode ? {borderColor: 'black'} : {borderColor: 'grey'};

  //dark mode enable

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  //width for diffrent sizes
  const dimensions = useWindowDimensions();
  const resposiveWidth = dimensions.width > 400 ? {width: 600} : {width: 250};

  return (
    <ScrollView
      style={[{flex: 1}, themeBackgroundColor]}
      keyboardDismissMode="on-drag">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
        <View style={styles.header}>
          <Text style={[styles.title, themeColor]}>Login Page</Text>
          <View>
            <Text style={themeColor}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onChange={handleDarkMode}
              onValueChange={value => setDarkMode(value)}
            />
          </View>
        </View>
        <ImageBackground
          source={require('../assets/background.png')}
          resizeMode="cover"
          style={styles.imgBackground}>
          <Text style={styles.imgBackgroundText1}>This is testing phase</Text>
          <Text style={styles.imgBackgroundText2}>This is testing phase</Text>
        </ImageBackground>
        <View>
          <View style={[styles.textInput, themeColor, themeBorderColor]}>
            <TextInput
              name="username"
              style={[themeColor, resposiveWidth]}
              value={creds.username}
              onChange={handleChange}
              placeholder="Enter Your Name"
              placeholderTextColor="grey"
              label="UserName"
            />
          </View>
          <View style={[styles.textInput2, themeBorderColor]}>
            <TextInput
              name="password"
              value={creds.password}
              style={[themeColor, resposiveWidth]}
              onChange={handleChange}
              placeholder="Enter Your Password"
              placeholderTextColor="grey"
              secureTextEntry={showPass}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPass(!showPass);
              }}>
              <Text style={[styles.show, themeColor]}>
                {showPass ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitBtn} onPress={handleSubmit}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View /> */}

        <View style={[styles.divider, themeBorderColor]}>
          <Text style={styles.loginWith}>Or continue with</Text>
          <View style={styles.loginWithOptions}>
            <TouchableOpacity>
              <Image
                source={require('../assets/facebook.png')}
                style={styles.loginWithOptionsName}
                accessible={true}
                accessibilityLabel="This is facebook Login"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/google.png')}
                style={styles.loginWithOptionsName}
                accessible={true}
                accessibilityLabel="This is Google Login"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/apple.png')}
                style={styles.loginWithOptionsName}
                accessible={true}
                accessibilityLabel="This is Apple Login"
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    padding: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgBackground: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBackgroundText1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  imgBackgroundText2: {
    color: 'white',
    padding: 10,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    margin: 20,
    color: 'black',
    borderRadius: 4,
  },
  textInput2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    margin: 20,
    color: 'black',
    borderRadius: 4,
  },
  show: {
    paddingHorizontal: 10,
  },
  submit: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 4,
  },
  submitBtn: {
    color: 'white',
    padding: 10,
    fontSize: 20,
  },
  divider: {
    borderTopWidth: 1,
    borderColor: 'black',
  },
  loginWith: {
    textAlign: 'center',
    padding: 10,
  },
  loginWithOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  loginWithOptionsName: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
export default DarkAndLightMode;
