import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
// import data from '../../fakeData/all';

const EditProfile = ({navigation}) => {
  const [city, setCity] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>edit profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#223a61', padding: scale(12)},
  title: {fontSize: scale()},
});

export default EditProfile;
