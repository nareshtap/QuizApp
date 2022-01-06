import React from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LandingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.quizCtn}>
        <Text style={styles.quizTime}>Quiz Time</Text>
      </View>
      <View style={styles.imageCtn}>
        <Image style={styles.image} source={require('../Images/logo.png')} />
      </View>
      <View style={styles.playCtn}>
        <TouchableOpacity
          style={styles.touchCtn}
          onPress={() => {
            navigation.navigate('QuestionScreen');
          }}>
          <Text style={styles.playQuiz}>Play Quiz</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb703',
    alignItems: 'center',
  },
  playQuiz: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
  },
  touchCtn: {
    backgroundColor: '#002347',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.5,
    height: width * 0.13,
    borderRadius: 8,
    marginVertical: 40,
  },
  image: {
    height: 300,
    width: width * 0.8,
    resizeMode: 'contain',
  },
  imageCtn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizTime: {
    fontSize: 50,
    fontWeight: '700',
    color: '#000',
  },
  quizCtn: {
    flex: 1,
    marginTop: 30,
  },
  playCtn: {
    flex: 1,
    paddingTop: 40,
  },
});
