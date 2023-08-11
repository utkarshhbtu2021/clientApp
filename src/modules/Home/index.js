import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import bookingimg from '../../asserts/bookingimg.png';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={{marginTop: 16, alignItems: 'center'}}>
          <Text style={styles.headingTitle}>BARBAR SHOP</Text>
          <Text style={styles.headingTitlesec}> Booking App </Text>
        </View>
        <Image
          style={styles.tinyLogo}
          resizeMode="contain"
          source={bookingimg}
        />
        <View style={styles.booknowView}>
          <Text style={{marginTop: 14, color: '#efd8ce'}}>
            Book Your Slots Here !
          </Text>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => navigation.navigate('Service')}>
            <Text style={{fontWeight: '900', fontFamily: 'Lato'}}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efd8ce',
  },
  viewContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    height: '100%',
  },
  headingTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    color: '#2d3925',
  },
  headingTitlesec: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    color: '#2d3925',
  },
  tinyLogo: {
    alignItems: 'center',
    alignSelf: 'center',
    width: windowWidth - 80,
    height: windowHeight - 250,
  },
  booknowView: {
    backgroundColor: '#2d3925',
    height: 120,
    alignItems: 'center',
  },
  bookButton: {
    width: 120,
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 12,
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#efd8ce',
    borderRadius: 5,
  },
});
export default HomeScreen;
