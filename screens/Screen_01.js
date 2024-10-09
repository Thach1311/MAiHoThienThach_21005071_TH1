import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Screen_01({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.custom1}>Order your favorite!</Text>
      <Image source={require('../assets/Data/Image_96.png')} style={styles.image1} />
      <Image source={require('../assets/Data/Image_95.png')} />
      <Image source={require('../assets/Data/Image_97.png')} style={styles.image2} />
      <View style={styles.custom2}>
        <TouchableOpacity style={styles.custom3} onPress={() => navigation.navigate('Screen_02')}>
          <Text style={styles.buttonText}>Get Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  custom1: {
    fontSize: 30,
    color: '#09d44c',
    fontWeight: '300',
    textAlign: 'center',
  },
  image1: {
    marginLeft: 215,
  },
  image2: {
    marginLeft: 200,
  },
  custom2: {
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
  },
  custom3: {
    backgroundColor: '#09d44c',
    borderRadius: 15,
    width: 150,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
