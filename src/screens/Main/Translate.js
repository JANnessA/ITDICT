import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {SearchBar} from '../../components/searchBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import axios from 'axios';
import HTML from 'react-native-render-html';

const Translate = ({navigation}) => {
  const [valueSearch, setValueSearch] = useState('');
  const [lang, setLang] = useState('en');
  const [status, setStatus] = useState(null);
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);

  function renderItem({item}) {
    let backgroundC = click === item._id ? 'orange' : '#fff';
    return (
      <View
        style={{
          backgroundColor: backgroundC,
          padding: scale(12),
          width: '100%',
          marginVertical: scale(5),
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            setClick(item._id);
          }}>
          <HTML source={{html: item.fields.en}} style={{padding: scale(12)}} />
          {click === item._id && (
            <View style={{borderTopWidth: 1}}>
              <Text>{item.fields.vi}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <TouchableOpacity
          style={styles.contaiHeader}
          onPress={() => {
            setStatus(null);
            navigation.navigate('MainScreen');
          }}>
          <Ionicons name={'chevron-back-outline'} size={28} color={'#fff'} />
        </TouchableOpacity>
        <Text style={{color: '#fff', fontSize: 20}}>Quay lại</Text>
      </View>
      <SearchBar
        screen={'translateScreen'}
        setData={setData}
        setStatus={setStatus}
      />
      <View style={styles.body}>
        {status === 200 && (
          <View style={styles.body}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item._id}
              style={{marginTop: scale(10)}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: scale(5),
              }}>
              <Text style={{color: '#ddd'}}>Nguồn: </Text>
              <TouchableOpacity>
                <Text style={{color: '#ddd'}}>https://tracau.vn/</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {valueSearch === '' && status === null && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.center} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#223a61', padding: scale(12)},
  inline: {flexDirection: 'row', flex: 1, alignItems: 'center'},
  contaiHeader: {
    justifyContent: 'center',
    width: scale(30),
    marginRight: scale(5),
  },
  body: {flex: 8},
  center: {backgroundColor: '#1a5296', width: '97%', height: '99%'},
});

export default Translate;
