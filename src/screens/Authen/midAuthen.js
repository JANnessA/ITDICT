import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {scale} from 'react-native-size-matters';

const midAuthen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/img/bluebackground.jpg')}>
        <View style={styles.contaiLogo}>
          <Image
            source={require('../../assets/img/dictionary.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.contaicontent}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.txtButton}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.txtButton}>Đăng kí</Text>
            </TouchableOpacity>
          </View>
          {
            //   <View style={styles.contaiFinger}>
            //   <Text style={styles.textInfor}>
            //     Hiện tại bạn có thể đăng nhập bằng vân tay
            //   </Text>
            //   <TouchableOpacity style={styles.buttonFinger}>
            //     <Image
            //       source={require('../../assets/img/fingerprint.png')}
            //       style={styles.fingerImage}
            //     />
            //   </TouchableOpacity>
            // </View>
          }
        </View>
      </ImageBackground>
    </View>
  );
};

export default midAuthen;

const styles = StyleSheet.create({
  container: {flex: 1},
  background: {flex: 1},
  contaiLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {width: scale(250), height: scale(250)},
  contaicontent: {flex: 0.6},
  button: {
    width: scale(250),
    height: scale(50),
    backgroundColor: '#172a56',
    marginTop: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  txtButton: {color: '#ddd', fontSize: 22},
  contaiFinger: {justifyContent: 'center', alignItems: 'center'},
  textInfor: {fontSize: scale(12), color: '#172a56', marginTop: scale(20)},
  fingerImage: {width: scale(100), height: scale(100), marginTop: scale(20)},
  buttonFinger: {justifyContent: 'center', alignItems: 'center'},
});
