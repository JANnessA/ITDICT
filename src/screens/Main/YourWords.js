import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
// import yours from '../../';
import {SpeakerIcon, StarIcon, SquareIcon} from '../../assets/svg/svg';
// import {getMp3Link} from '../../Helper/TextToSpeech';
import {SearchBar} from '../../components/searchBar';
import axios from 'axios';
import Config from '../../../config';

const YourWords = ({navigation}) => {
  const [valueSearch, setValueSearch] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${Config.URL_BASE}/word/user`, {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGViMzU1MWM5ZmFlNDNkNjg4YTk0MGYiLCJpYXQiOjE2MjY1MDc3MTMsImV4cCI6MTYyNjU5NDExM30.vXOAkvTnTwV888ryOqhkZbnfiouR-AeGQiJ_FmjxcKo',
        },
      })
      .then(res => setData(res.data));
  }, []);
  function renderItem({item}) {
    const word = item.word;
    return (
      <View style={styles.contaiItem}>
        <TouchableOpacity
          style={styles.left}
          onPress={() => {
            navigation.navigate('Word', {item: item});
          }}>
          <Text style={[styles.word, styles.txt]}>{word}</Text>
          <Text style={[styles.txt, styles.blurTxt]}>{item.pronounce}</Text>
          <Text style={[styles.txt, styles.width]} numberOfLines={2}>
            {item.means[0].mean}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speakerIcon}>
          <SpeakerIcon width={scale(20)} height={scale(20)} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.starIcon}>
          <StarIcon
            width={scale(20)}
            height={scale(20)}
            color={'#000'}
            fill={'#fff'}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contaiTitle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.contaiHeader}
            onPress={() => navigation.navigate('MainScreen')}>
            <Ionicons name={'chevron-back-outline'} size={30} color={'#fff'} />
          </TouchableOpacity>
          <Text style={styles.title}>YourWords</Text>
        </View>
        <SearchBar valueSearch={valueSearch} setValueSearch={setValueSearch} />
      </View>
      <View style={styles.body}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{marginTop: scale(7)}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#0b3454', padding: scale(12)},
  contaiTitle: {justifyContent: 'center', alignItems: 'center', flex: 2},
  title: {
    color: '#fff',
    fontSize: scale(40),
    fontFamily: 'Montserrat-Thin',
    flex: 1,
    marginLeft: scale(30),
  },
  body: {flex: 9, padding: scale(5)},
  //--------item----------
  contaiItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: scale(5),
    padding: scale(15),
  },
  squareBtn: {
    width: scale(20),
    height: scale(20),
    marginHorizontal: scale(10),
  },
  contaiTxt: {width: scale(150), flexDirection: 'row'},
  txt: {fontSize: scale(15)},
  starIcon: {position: 'absolute', right: scale(20)},
  speakerIcon: {
    marginRight: scale(15),
    marginLeft: scale(6),
  },
  word: {
    color: '#4287f5',
    fontWeight: 'bold',
    marginHorizontal: scale(5),
    marginVertical: scale(2),
  },
  blurTxt: {color: '#aaa'},
  width: {width: scale(200)},
  column: {flexDirection: 'column'},
});

export default YourWords;
