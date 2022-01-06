import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Button,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from '../axios';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const QuestionScreen = props => {
  const [option, setOption] = useState(null);
  const [text, setText] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    getQuestion();
  }, []);

  const onSubmit = async () => {
    const Data = {
      question: 'Which is the biggest city in India 2020?',
      text: text,
      selectedOption: option,
    };
    if (option === null) {
      Alert.alert('Error', 'Please select one option');
    } else {
      await axios
        .post('/addAnswer', Data)
        .then(res => {
          console.log('Ressss-----', res);
          props.navigation.navigate('LandingScreen');
        })
        .catch(err => {
          console.log('errr-----------', err.response);
          Alert.alert('Error', err?.response?.data);
        });
    }
  };

  const getQuestion = async () => {
    await axios
      .get('/getQuestion')
      .then(res => {
        console.log('Ressss-----', res.data.data);
        setData(res.data.data);
      })
      .catch(err => {
        console.log('errr-----------', err);
        Alert.alert('Error', err?.response?.data);
      });
  };

  const RadioButton = () => {
    const selectHandler = value => setOption(value);
    const datas = Object.values(data?.options || []);
    return (
      <View>
        {datas?.map(item => {
          return (
            <TouchableOpacity
              style={item === option ? styles.selected : styles.unselected}
              onPress={() => selectHandler(item)}>
              <View
                style={[
                  styles.radioCtn,
                  {borderColor: item === option ? '#002347' : '#fff'},
                ]}>
                <View style={{margin: 10}}>
                  <Fontisto
                    name={
                      item === option ? 'radio-btn-active' : 'radio-btn-passive'
                    }
                    color="#002347"
                    size={23}
                  />
                </View>
                <View style={{justifyContent: 'flex-start', flex: 1.5}}>
                  <Text style={styles.option}>{item}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.freeTextCtn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back-outline" color="#002347" size={30} />
          </TouchableOpacity>
          <TextInput
            style={styles.freeText}
            onChangeText={value => {
              setText(value);
            }}
            value={text}
            placeholder="Enter Your Text"
          />
        </View>
        <View style={styles.questionCtn}>
          <Text>Question 1/1</Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 2}} />
          <Text style={styles.questionText}>{data.question}</Text>
          <RadioButton />
        </View>
        <View style={styles.buttonCtn}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('LandingScreen');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>BACK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onSubmit();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb703',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width * 0.95,
  },
  button: {
    backgroundColor: '#002347',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.35,
    height: height * 0.057,
    borderRadius: 8,
    marginVertical: 40,
  },
  answerCtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    height: width * 0.1,
    width: width * 0.95,
    borderRadius: 10,
    marginVertical: '5%',
  },
  selected: {
    backgroundColor: '',
  },
  unselected: {
    backgroundColor: '',
  },
  option: {
    fontSize: 23,
    fontWeight: '500',
    color: '#000',
  },
  buttonCtn: {
    flexDirection: 'row',
    paddingTop: width * 0.2,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
  },
  questionCtn: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 30,
  },
  questionText: {
    fontSize: 40,
    marginBottom: 40,
    marginTop: 20,
    fontWeight: '700',
    color: '#000',
  },
  freeText: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#d6dff0',
    paddingHorizontal: 13,
    height: width * 0.12,
    width: width * 0.9,
    borderRadius: 7,
    color: '#000',
  },
  freeTextCtn: {
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    backgroundColor: '#d6dff0',
    paddingHorizontal: 13,
    height: width * 0.15,
    width: width * 0.9,
    borderRadius: 15,
    borderWidth: 2,
  },
});
