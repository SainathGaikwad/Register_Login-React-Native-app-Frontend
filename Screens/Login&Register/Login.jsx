const {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} = require('react-native');
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import axios from 'axios';

function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    console.log(email, password);
    const UserData = {
      email: email,
      password,
    };
    axios.post('http://192.168.1.3:5001/login-user', UserData).then(res => {
      console.log(res.data);
      if (res.data.status == 'ok') {
        Alert.alert('Looged in successfully');
        navigation.navigate('Home');
      }
    });
  }
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps={'always'}>
      <View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Login !!!</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#420475"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Mobile or Email"
              style={styles.textInput}
              onChange={e => setEmail(e.nativeEvent.text)}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChange={e => setPassword(e.nativeEvent.text)}
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginTop: 8,
              marginRight: 10,
            }}>
            <Text style={{color: '#420475', fontWeight: '700'}}>
              ForgotPasssword
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.inBut}
            onPress={() => {
              handleSubmit();
              // navigation.navigate('Home');
            }}>
            <View>
              <Text style={styles.textSign}>Log in</Text>
            </View>
          </TouchableOpacity>
          <View style={{padding: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
              ---Or Continue as---
            </Text>
          </View>
          <View style={styles.bottomButton}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity style={styles.inBut2}>
                <FontAwesome
                  name="user-circle-o"
                  color="white"
                  style={styles.smallIcon2}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Guest</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                <FontAwesome
                  name="user-plus"
                  color="white"
                  style={[styles.smallIcon2, {fontSize: 30}]}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Sign up</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => alert('coming soon')}>
                <FontAwesome
                  name="google"
                  color="white"
                  style={[styles.smallIcon2, {fontSize: 30}]}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Google</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => alert('coming soon')}>
                <FontAwesome
                  name="facebook-f"
                  color="white"
                  style={[styles.smallIcon2, {fontSize: 30}]}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Facebook</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default LoginPage;
