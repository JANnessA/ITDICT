import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {SpeakerIcon, StarIcon} from '../assets/svg/svg';
import {scale} from 'react-native-size-matters';
import Tts from 'react-native-tts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../App';
import Config from '../../config';
import axios from 'axios';

export default function Flatlist(props) {
  const counter = useContext(AuthContext);

  const [token2, setToken2] = useState();
  const [userWord, setUserWord] = useState([]);
  const [changeColor, setChangeColor] = useState(false);
  const [idColor, setIdColor] = useState();

  Tts.setDefaultLanguage('en-IE');

  function addWord(id) {
    axios
      .get(`${Config.URL_BASE}/add/:${id}`, {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGViMzU1MWM5ZmFlNDNkNjg4YTk0MGYiLCJpYXQiOjE2MjY1MDc3MTMsImV4cCI6MTYyNjU5NDExM30.vXOAkvTnTwV888ryOqhkZbnfiouR-AeGQiJ_FmjxcKo',
        },
      })
      .then(res => console.log(res));
  }

  function removeWord(id) {
    axios.get(`${Config.URL_BASE}/remove/${id}`, {
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGViMzU1MWM5ZmFlNDNkNjg4YTk0MGYiLCJpYXQiOjE2MjY1MDc3MTMsImV4cCI6MTYyNjU5NDExM30.vXOAkvTnTwV888ryOqhkZbnfiouR-AeGQiJ_FmjxcKo',
      },
    });
  }

  function renderItem({item, index}) {
    return (
      <View style={styles.contaiItem}>
        <TouchableOpacity
          style={styles.left}
          onPress={() =>
            props.navigation.navigate('Word', {
              item: item,
            })
          }>
          <Text style={[styles.word, styles.txt]}>{item.word}</Text>
          <Text style={[styles.txt, styles.blurTxt]}>{item.pronounce}</Text>
          <Text style={[styles.txt, styles.width]} numberOfLines={2}>
            {item.means[0].mean}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.speakerIcon}
          onPress={() => {
            Tts.speak(item.word);
          }}>
          <SpeakerIcon width={scale(20)} height={scale(20)} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.starIcon}
          onPress={() => {
            addWord(item._id);
          }}>
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
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={item => item._id}
    />
  );
}

const styles = StyleSheet.create({
  contaiItem: {
    flexDirection: 'row',
    marginHorizontal: scale(10),
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
  left: {width: '70%'},
});
