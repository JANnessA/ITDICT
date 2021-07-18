import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {ArrowIcon, SpeakerIcon} from '../../assets/svg/svg';
import Tts from 'react-native-tts';

const Word = ({route, navigation}) => {
  Tts.setDefaultLanguage('en-IE');
  const {item} = route.params;
  // console.log(route.params);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.contaiHeader}>
          <Text style={styles.title}>{item.word}</Text>
          <TouchableOpacity
            style={styles.speakerIcon}
            onPress={() => Tts.speak(item.word)}>
            <SpeakerIcon
              width={scale(25)}
              height={scale(25)}
              color={'#386db5'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.txt}>{`${item.pronounce} _ ${item.type}`}</Text>
        <View style={styles.row}>
          <ArrowIcon width={scale(20)} height={scale(20)} />
          <Text style={styles.txt}>{item.means[0].mean}</Text>
        </View>
        <View style={styles.contaiArrow}>
          <ArrowIcon width={scale(20)} height={scale(20)} />
          <Text style={styles.txt}>{item.means[0].example}</Text>
        </View>
        <View style={styles.contaiArrow}>
          <ArrowIcon width={scale(20)} height={scale(20)} />
          <Text style={[styles.txt, {fontWeight: 'bold'}]}>
            {'Tình huống xử dụng:'}
          </Text>
        </View>
        <View style={styles.contaiArrow}>
          <Text style={styles.txt}>{item.means[0].situation}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#223a61', padding: scale(12)},
  body: {flex: 9, marginHorizontal: scale(20)},
  //----------body
  contaiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
    fontSize: scale(17),
    marginHorizontal: scale(5),
    marginVertical: scale(5),
    color: '#ddd',
  },
  contaiArrow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default Word;
