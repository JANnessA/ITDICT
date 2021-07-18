import React, {useRef, useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CardFlip from 'react-native-card-flip';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from '../../../config';
import axios from 'axios';
import {AuthContext} from '../../../App';
import {ArrowIcon, SpeakerIcon} from '../../assets/svg/svg';
import Tts from 'react-native-tts';

const ReLearnWords = ({navigation}) => {
  Tts.setDefaultLanguage('en-IE');
  const [data, setData] = useState([]);
  const [randomId, setRandomId] = useState(0);
  const [item, setItem] = useState();

  useEffect(() => {
    axios
      .get(`${Config.URL_BASE}/word/user`, {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGViMzU1MWM5ZmFlNDNkNjg4YTk0MGYiLCJpYXQiOjE2MjY1MDc3MTMsImV4cCI6MTYyNjU5NDExM30.vXOAkvTnTwV888ryOqhkZbnfiouR-AeGQiJ_FmjxcKo',
        },
      })
      .then(res => {
        setData(res.data);
      })
      .catch(e => console.log('err ', e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const card = useRef(null);

  function onCardFlip() {
    card.current.flip();
  }

  function removeWord(id) {
    axios
      .get(`${Config.URL_BASE}/user/remove/${id}`, {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGViMzU1MWM5ZmFlNDNkNjg4YTk0MGYiLCJpYXQiOjE2MjY1MDc3MTMsImV4cCI6MTYyNjU5NDExM30.vXOAkvTnTwV888ryOqhkZbnfiouR-AeGQiJ_FmjxcKo',
        },
      })
      .then(res => {
        setData(res.data);
      })
      .catch(e => console.log('err ', e));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contaiHeader}
        onPress={() => navigation.navigate('MainScreen')}>
        <Ionicons name={'chevron-back-outline'} size={30} color={'#fff'} />
      </TouchableOpacity>
      <View style={styles.contaiFlip}>
        <CardFlip style={styles.cardContainer} ref={card}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              onCardFlip();
              Tts.speak(data[randomId].word);
            }}>
            {data.length > 0 ? (
              <Text style={styles.frontText}>{data[randomId].word}</Text>
            ) : (
              <View />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardback}
            onPress={() => onCardFlip()}>
            {data.length > 0 ? (
              <View style={styles.containerD}>
                <View>
                  <Text style={styles.title}>{data[randomId].word}</Text>
                </View>
                <Text
                  style={{
                    fontSize: 17,
                  }}>{`${data[randomId].pronounce} _ ${data[randomId].type}`}</Text>
                <View style={styles.row}>
                  <ArrowIcon width={scale(20)} height={scale(20)} />
                  <Text style={styles.txt}>{data[randomId].means[0].mean}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <ArrowIcon width={scale(20)} height={scale(20)} />
                  <Text style={styles.txt}>
                    {data[randomId].means[0].example}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <ArrowIcon width={scale(20)} height={scale(20)} />
                  <Text style={styles.txt}>{'Tình huống xử dụng:'}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 15}}>
                    {data[randomId].means[0].situation}
                  </Text>
                </View>
              </View>
            ) : (
              <View />
            )}
          </TouchableOpacity>
        </CardFlip>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            removeWord(data[randomId]._id);
            setRandomId(randomId + 1);
          }}>
          <Text style={styles.txtButtn}>Đã thuộc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setRandomId(randomId + 1);
          }}>
          <Text style={styles.txtButtn}>Chưa thuộc</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#223a61', padding: scale(12)},
  cardContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 400,
    backgroundColor: '#1a5296',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontText: {color: '#fff', fontSize: scale(30)},
  cardback: {width: 300, height: 400, backgroundColor: '#ddd'},
  contaiHeader: {flex: 1, justifyContent: 'center'},
  contaiFlip: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4.5,
    marginHorizontal: scale(16),
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: scale(100),
    height: scale(40),
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
  },
  txtButtn: {color: 'white'},
  body: {flex: 9, marginHorizontal: scale(20)},
  row: {flexDirection: 'row', alignItems: 'center'},
  speakerIcon: {
    position: 'absolute',
    right: scale(5),
    top: scale(10),
  },
  title: {
    fontSize: scale(30),
    fontWeight: 'bold',
    color: '#386db5',
  },
  txt: {
    fontSize: scale(15),
    marginHorizontal: scale(5),
    marginVertical: scale(5),
  },
  containerD: {flex: 1, backgroundColor: '#e1e8e9', padding: scale(16)},
});

export default ReLearnWords;
