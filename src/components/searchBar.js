import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SearchIcon} from '../assets/svg/svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Config from '../../config';

export function SearchBar(props) {
  const {setData, setStatus} = props;
  const [valueSearch, setValueSearch] = useState('');

  function search(value, screen) {
    if (screen === 'main') {
      axios
        .get(`${Config.URL_BASE}/word?query=${value}`)
        .then(res => {
          // console.log(res.data);
          setData(res.data);
        })
        .catch(err => console.log(`find word got err : ${err}`));
    } else {
      axios
        .get(`https://api.tracau.vn/WBBcwnwQpV89/s/${valueSearch}/en`)
        .then(function (res) {
          // console.log(res.data.sentences);
          console.log('abc', res.data.sentences);
          setStatus(res.status);
          setData(res.data.sentences);
        });
    }
  }

  return (
    <View style={styles.header}>
      <View style={styles.contaiTextInput}>
        <TextInput
          value={valueSearch}
          onChangeText={t => setValueSearch(t)}
          style={styles.TextInput}
          placeholder={'Tìm kiếm'}
        />
        <TouchableOpacity
          style={styles.iconSearch}
          onPress={() => {
            search(valueSearch, props.screen);
            setValueSearch('');
          }}>
          <SearchIcon width={scale(18)} height={scale(18)} color={'#aaa'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#223a61',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  contaiTextInput: {
    width: scale(300),
    height: scale(45),
    backgroundColor: 'white',
    borderRadius: scale(25),
    borderWidth: scale(1),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(2),
  },
  closeIcon: {
    width: scale(22),
    height: scale(22),
    marginLeft: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    marginLeft: scale(2),
    width: scale(260),
    height: scale(43),
    padding: scale(10),
    fontSize: 18,
  },
  iconSearch: {
    width: scale(35),
    height: scale(35),
    marginLeft: scale(-2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
