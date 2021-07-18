import React, {useState, useContext, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {AuthContext} from '../../../App';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {regexEmail, regexNoSQL} from '../../Helpers/checkInjection';

const Register = ({navigation}) => {
  const {signUp} = useContext(AuthContext);

  // const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [gmail, setGmail] = useState('');

  // const {Register} = useContext(AuthContext);
  const ref_input2 = useRef(null);

  async function checkRegister() {
    if (gmail === '' || userName === '') {
      Alert.alert('Hãy nhập đủ các trường');
    } else if (!regexEmail.test(gmail) || regexNoSQL.test(gmail)) {
      Alert.alert('Email bạn nhập chưa đúng định dạng.');
    } else if (regexNoSQL.test(userName)) {
      Alert.alert('Username của bạn có chứa kí tự đặc biệt.');
    } else {
      signUp(userName, gmail);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.navigate('Login')}>
        <Ionicons name={'chevron-back-outline'} size={28} color={'#fff'} />
      </TouchableOpacity>
      <View style={styles.contaiLogo}>
        <Image
          source={require('../../assets/img/dictionary.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>ĐĂNG KÍ</Text>
      </View>
      <View style={styles.contaiTextInput}>
        <TextInput
          style={styles.textInput}
          onChangeText={t => setUserName(t)}
          value={userName}
          placeholder="Username"
          keyboardType={'default'}
          placeholderTextColor="#aaa"
          returnKeyType={'next'}
          onSubmitEditing={() => ref_input2.current.focus()}
        />
        <TextInput
          ref={ref_input2}
          style={styles.textInput}
          onChangeText={t => setGmail(t)}
          value={gmail}
          placeholder="Gmail"
          keyboardType={'email-address'}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            checkRegister();
            // signUp(userName, gmail);
          }}>
          <Text>Đăng kí</Text>
        </TouchableOpacity>
      </View>
      {
        //   <Modal animationType="slide" transparent={true} visible={modalVisible}>
        //   <View style={styles.centeredView}>
        //     <TouchableOpacity
        //       style={styles.modalView}
        //       onPress={() => {
        //         setModalVisible(false);
        //       }}>
        //       <Text>Thông tin nhập chưa đúng, hãy thử lại</Text>
        //     </TouchableOpacity>
        //   </View>
        // </Modal>
      }
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b3454',
  },
  backIcon: {marginLeft: scale(20), marginTop: scale(20)},
  contaiLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  logo: {width: scale(200), height: scale(200), marginTop: scale(50)},
  title: {color: '#060e17', fontSize: scale(30), marginVertical: scale(10)},
  contaiTextInput: {
    backgroundColor: '#114773',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.33,
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
    marginVertical: scale(2),
  },
  //--------modal---------
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
    backgroundColor: '#aaa',
  },
  modalView: {
    margin: scale(10),
    backgroundColor: '#fff',
    borderRadius: scale(10),
    padding: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(200),
    height: scale(200),
  },
  input: {
    height: 40,
    width: 170,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
});
