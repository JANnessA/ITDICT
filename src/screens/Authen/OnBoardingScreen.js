import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {scale} from 'react-native-size-matters';

export default function OnBoardingScreen({navigation}) {
  const Skip = ({...props}) => (
    <View>
      <TouchableOpacity style={styles.skipButton} {...props}>
        <Text>{'Bỏ qua'}</Text>
      </TouchableOpacity>
    </View>
  );
  const Next = ({...props}) => (
    <View>
      <TouchableOpacity style={styles.nextButton} {...props}>
        <Text>{'Tiếp theo'}</Text>
      </TouchableOpacity>
    </View>
  );
  const Done = ({...props}) => (
    <View>
      <TouchableOpacity style={styles.nextButton} {...props}>
        <Text>{'Tiếp theo'}</Text>
      </TouchableOpacity>
    </View>
  );
  const Dots = ({selected}) => {
    return (
      <View
        style={{
          marginVertical: scale(20),
          margin: scale(2),
          width: scale(6),
          height: scale(6),
          borderRadius: scale(3),
          backgroundColor: selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)',
        }}
      />
    );
  };

  return (
    <Onboarding
      bottomBarHeight={scale(120)}
      bottomBarColor="#fff"
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      NextButtonComponent={Next}
      DotComponent={Dots}
      onSkip={() => {
        navigation.navigate('midAuthen');
      }}
      onDone={() => {
        navigation.navigate('midAuthen');
      }}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/img/onB1.png')}
              style={styles.img}
            />
          ),
          title: 'Học tập mọi lúc mọi nơi',
          subtitle:
            'Bạn có thể học mọi lúc mọi nơi dễ dàng chỉ với thiết bị có kết nối internet',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/img/dictionary_168552845.jpg')}
              style={styles.img}
            />
          ),
          title: 'Học tập mọi lúc mọi nơi',
          subtitle: 'Dễ dàng tìm kiếm từ vựng chuyên ngành mới',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/img/dic.jpg')}
              style={styles.img}
            />
          ),
          title: 'Học tập mọi lúc mọi nơi',
          subtitle: 'Thư viện từ vựng liên tục được cập nhật',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {flex: scale(1), alignItems: 'center', justifyContent: 'center'},
  skipButton: {
    borderWidth: 1,
    borderColor: 'orange',
    width: scale(120),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
    marginHorizontal: scale(40),
    marginTop: scale(80),
    marginBottom: scale(40),
  },
  nextButton: {
    width: scale(120),
    height: scale(40),
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
    marginHorizontal: scale(40),
    marginTop: scale(80),
    marginBottom: scale(40),
  },
  img: {width: '100%', height: scale(300)},
});
