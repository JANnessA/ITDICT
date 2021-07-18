import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../../App';

const Profile = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState('false');
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [city, setCity] = useState('');
  const [modalVisibleInfor, setModalVisibleInfor] = useState(false);

  return (
    <View style={styles.container}>
      <Ionicons name={'person-circle-outline'} size={150} color={'#aaa'} />
      <Text style={styles.hi}>Hi Jann</Text>
      <View style={styles.contaiEmail}>
        <Text style={styles.txtTitle}>Gmail</Text>
        <Text style={styles.txt}>Tuyenletm31@gmail.com</Text>
      </View>
      <View style={styles.contaiCity}>
        <Text style={styles.txtTitle}>City</Text>
        <Text style={styles.txt}>{city}</Text>
      </View>
      <TouchableOpacity
        style={styles.contaiButton}
        onPress={() => setModalVisible(true)}>
        <Text style={{color: '#fff'}}>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.contaiButton}
        onPress={() => {
          setModalVisibleInfor(true);
        }}>
        <Text style={{color: '#fff'}}>Edit profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('YourWords')}
        style={styles.contaiButton}>
        <Text style={{color: '#fff'}}>Your words</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.contaiLogout}
        onPress={() => {
          signOut();
        }}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{marginBottom: scale(10)}}>THAY ĐỔI MẬT KHẨU</Text>
            <TextInput
              style={styles.input}
              onChangeText={t => setOldPass(t)}
              value={oldPass}
              keyboardType={'default'}
              secureTextEntry={true}
              placeholder={'Nhập mật khẩu cũ'}
            />
            <TextInput
              style={styles.input}
              onChangeText={t => setNewPass(t)}
              value={newPass}
              keyboardType={'default'}
              secureTextEntry={true}
              placeholder={'Nhập mật khẩu mới'}
            />
            <TouchableOpacity
              style={styles.contaiAccept}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={styles.Text}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleInfor}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              margin: scale(10),
              backgroundColor: '#fff',
              borderRadius: scale(10),
              padding: scale(8),
              justifyContent: 'center',
              alignItems: 'center',
              width: scale(300),
              height: scale(400),
            }}>
            <TouchableOpacity
              style={{position: 'absolute', top: 2, right: 2}}
              onPress={() => {
                setModalVisibleInfor(false);
              }}>
              <Ionicons
                name={'close-circle-outline'}
                size={30}
                color={'#000'}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                position: 'absolute',
                top: scale(40),
              }}>
              THAY ĐỔI THÔNG TIN TÀI KHOẢN
            </Text>
            <TextInput />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223a61',
    padding: scale(12),
    alignItems: 'center',
    paddingTop: scale(30),
  },
  ava: {width: scale(150), height: scale(150)},
  contaiEmail: {
    flexDirection: 'row',
    marginHorizontal: scale(15),
    marginVertical: scale(15),
  },
  hi: {color: '#fff', fontSize: 25},
  txtTitle: {color: '#fff', padding: scale(10), width: 80},
  txt: {
    color: '#fff',
    padding: scale(10),
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: scale(7),
    width: 200,
  },
  contaiCity: {
    flexDirection: 'row',
  },
  txtCity: {
    color: '#fff',
    padding: scale(10),
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: scale(10),
    width: 200,
  },
  contaiButton: {
    width: 200,
    height: 40,
    backgroundColor: 'orange',
    marginTop: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  contaiLogout: {
    width: 200,
    height: 40,
    backgroundColor: '#011d4a',
    marginTop: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  contaiAccept: {
    width: 100,
    height: 40,
    backgroundColor: 'orange',
    marginTop: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  //--------modal---------
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 180,
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Profile;
