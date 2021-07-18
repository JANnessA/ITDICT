import React, {useState, useContext, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {AuthContext} from '../../../App';
import {regexEmail, regexNoSQL, regexPass} from '../../Helpers/checkInjection';

const Login = ({navigation}) => {
  const {signIn} = useContext(AuthContext);

  const [gmail, setGmail] = useState('');
  const [pass, setPass] = useState('');

  const ref_input2 = useRef(null);

  //
  async function checkLogin() {
    if (gmail === '' || pass === '') {
      Alert.alert('Hãy nhập đủ các trường');
    } else if (!regexEmail.test(gmail) || regexNoSQL.test(gmail)) {
      Alert.alert('Email bạn nhập chưa đúng định dạng.');
    } else if (!regexPass.test(pass) || regexNoSQL.test(pass)) {
      Alert.alert('Mật khẩu không đúng định dạng.');
    } else {
      signIn(gmail, pass);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contaiLogo}>
        <Image
          source={require('../../assets/img/dictionary.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>ĐĂNG NHẬP</Text>
      </View>
      <View style={styles.contaiTextInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={t => setGmail(t)}
          value={gmail}
          placeholder="Gmail"
          keyboardType={'email-address'}
          placeholderTextColor="#aaa"
          returnKeyType={'next'}
          onSubmitEditing={() => ref_input2.current.focus()}
        />
        <TextInput
          ref={ref_input2}
          style={styles.textInput}
          onChangeText={t => setPass(t)}
          value={pass}
          placeholder="Password"
          keyboardType={'default'}
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            checkLogin();
          }}>
          <Text style={styles.txtWhite}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b3454',
  },
  contaiLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  txtWhite: {color: '#fff'},
  logo: {
    width: scale(200),
    height: scale(200),
    marginTop: scale(50),
  },
  title: {
    color: '#060e17',
    fontSize: scale(30),
    marginVertical: scale(10),
    fontFamily: 'Festive',
  },
  contaiTextInput: {
    backgroundColor: '#114773',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
    marginHorizontal: scale(30),
    borderRadius: scale(18),
    padding: scale(20),
  },
  textInput: {
    width: '90%',
    height: scale(42),
    borderColor: 'orange',
    borderWidth: 1,
    marginVertical: scale(10),
    borderRadius: scale(20),
    padding: scale(10),
    color: '#aaa',
  },
  button: {
    width: '70%',
    height: scale(35),
    backgroundColor: 'orange',
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(5),
  },
});
