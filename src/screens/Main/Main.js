import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {SearchBar} from '../../components/searchBar';
import {scale} from 'react-native-size-matters';

import axios from 'axios';
import Config from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FlatlistComp from '../../components/flatlistComp';

const MainScreen = ({navigation}) => {
  const [data, setData] = useState('all');
  const [renderData, setRenderData] = useState([]);

  const backgroundButtonAll = data === 'all' ? '#eb6e34' : 'orange';
  const backgroundButtonIT = data === 'it' ? '#eb6e34' : 'orange';
  const backgroundButtonSecure = data === 'secure' ? '#eb6e34' : 'orange';

  //check button on top && get data user from async storage
  useEffect(() => {
    if (data === 'all') {
      axios
        .get(`${Config.URL_BASE}/word`)
        .then(function (res) {
          setRenderData(res.data);
        })
        .catch(e => console.log(`get all data get err: ${e}`));
    } else {
      axios
        .get(`${Config.URL_BASE}/word?category=${data}`)
        .then(function (res) {
          // setDL(res);
          setRenderData(res.data);
        })
        .catch(e => console.log(`get data word get err: ${e}`));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dictionary</Text>
        <View style={styles.inline}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: backgroundButtonAll}]}
            onPress={() => setData('all')}>
            <Text style={styles.txtButton}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: backgroundButtonIT}]}
            onPress={() => {
              setData('it');
            }}>
            <Text style={styles.txtButton}>IT'words</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: backgroundButtonSecure}]}
            onPress={() => {
              setData('secure');
            }}>
            <Text style={styles.txtButton}>Secure's words</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar setData={setRenderData} screen={'main'} />
      <View style={styles.body}>
        <FlatlistComp data={renderData} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223a61',
    padding: scale(12),
  },
  title: {
    color: '#fff',
    fontSize: scale(45),
    fontFamily: 'Montserrat-Thin',
    marginBottom: scale(5),
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: scale(5),
  },
  button: {
    width: scale(90),
    height: scale(35),
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(15),
  },
  txtButton: {fontSize: 15, color: '#fff'},
  header: {flex: 2},
  body: {flex: 7},
});

export default MainScreen;
