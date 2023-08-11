import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Dimensions} from 'react-native';
import scissor from '../../asserts/scissor.png';
import brush from '../../asserts/brush.png';
import creammate from '../../asserts/creammate.png';
import cutter from '../../asserts/cutter.png';
import Modal from 'react-native-modal';
import Registration from '../Registration';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ServicesPage = ({navigation}) => {
  const [shaving, setShaving] = useState(0);
  const [creammatedata, setCreammate] = useState(0);
  const [hairclaring, setHairclaring] = useState(0);
  const [haircut, setHaircut] = useState(0);
  const [registration, setRegistration] = useState(false);
  const [registered, setRegistred] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      openRegistrationPage();
    }, 1000);
  }, []);

  useEffect(() => {
    if (true) {
      setRegistration(false);
    }
  }, [registered]);

  const openRegistrationPage = () => {
    setRegistration(true);
  };

  const closeRegistrationPage = () => {
    setRegistration(false);
  };

  const proceedFunc = () => {
    if (registered == false) {
      setRegistration(true);
      navigation.navigate('Slots');
    }
    navigation.navigate('Slots');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '22%', backgroundColor: '#2d3925', padding: 12}}>
        <Text style={{fontSize: 28, color: '#FAFAFA'}}>Good Morning !</Text>
        <View
          style={{
            borderBottomWidth: 2,
            width: '50%',
            marginTop: 8,
            borderColor: '#FAFAFA',
          }}></View>
        <Text style={{color: '#FAFAFA', marginTop: 12}}>
          "Discover Your Perfect Experience! 🌟 Click on 'Services' to choose
          from a range of offerings. Feel free to select multiple services that
          cater to your preferences. Your journey to relaxation and rejuvenation
          starts here!"
        </Text>
      </View>
      <View style={{padding: 12, height: '70%'}}>
        <Text style={{fontSize: 24, fontWeight: '900'}}>Services</Text>
        <View style={{borderBottomWidth: 2, width: 84, marginTop: 1}}></View>
        <View style={styles.serviceView}>
          <View style={styles.serviceLeftView}>
            <Image
              style={styles.serviceIcon}
              resizeMode="contain"
              source={scissor}
            />
            <View style={{marginLeft: 8}}>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#2d3925'}}>
                HAIR CUT
              </Text>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#2d3925'}}>
                40 Rs/.
              </Text>
            </View>
          </View>
          <View style={styles.serviceRightView}>
            <TouchableOpacity
              onPress={() => {
                hairclaring >= 0
                  ? setHairclaring(hairclaring + 1)
                  : setHairclaring(0);
              }}>
              <Text style={{color: '#2d3925', fontSize: 28, fontWeight: '900'}}>
                +
              </Text>
            </TouchableOpacity>
            <Text style={{color: '#2d3925', fontSize: 22}}> 20 </Text>
            <TouchableOpacity>
              <Text style={{color: '#2d3925', fontSize: 28, fontWeight: '900'}}>
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.serviceView}>
          <View style={styles.serviceLeftView}>
            <Image
              style={styles.serviceIcon}
              resizeMode="contain"
              source={cutter}
            />
            <View style={{marginLeft: 8}}>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#2d3925'}}>
                SHAVING
              </Text>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#2d3925'}}>
                30 Rs/.
              </Text>
            </View>
          </View>
          <View style={styles.serviceRightView}>
            <TouchableOpacity
              onPress={() => {
                hairclaring >= 0
                  ? setHairclaring(hairclaring + 1)
                  : setHairclaring(0);
              }}>
              <Text style={{color: '#2d3925', fontSize: 28, fontWeight: '900'}}>
                +
              </Text>
            </TouchableOpacity>
            <Text style={{color: '#2d3925', fontSize: 22}}> 20 </Text>
            <TouchableOpacity>
              <Text style={{color: '#2d3925', fontSize: 28, fontWeight: '900'}}>
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.serviceView}>
          <View style={styles.serviceLeftView}>
            <Image
              style={styles.serviceIcon}
              resizeMode="contain"
              source={creammate}
            />
            <View style={{marginLeft: 8}}>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#2d3925'}}>
                CREAMBATH
              </Text>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#2d3925'}}>
                120 Rs/.
              </Text>
            </View>
          </View>
          <View style={styles.serviceRightView}>
            <TouchableOpacity>
              <Text style={{color: '#2d3925', fontSize: 28, fontWeight: '900'}}>
                +
              </Text>
            </TouchableOpacity>
            <Text style={{color: '#2d3925', fontSize: 22}}> 20 </Text>
            <TouchableOpacity>
              <Text style={{color: '#2d3925', fontSize: 28, fontWeight: '900'}}>
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.serviceView}>
          <View style={styles.serviceLeftView}>
            <Image
              style={styles.serviceIcon}
              resizeMode="contain"
              source={brush}
            />
            <View style={{marginLeft: 8}}>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#2d3925'}}>
                HAIR COLORING
              </Text>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#2d3925'}}>
                120 Rs/.
              </Text>
            </View>
          </View>
          <View style={styles.serviceRightView}>
            <TouchableOpacity
              onPress={() => {
                hairclaring >= 0
                  ? setHairclaring(hairclaring + 1)
                  : setHairclaring(0);
              }}>
              <Text style={{color: '#2d3925', fontSize: 28, fontWeight: '900'}}>
                +
              </Text>
            </TouchableOpacity>
            <Text style={{color: '#2d3925', fontSize: 22}}>
              {' '}
              {hairclaring}{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                hairclaring > 0
                  ? setHairclaring(hairclaring - 1)
                  : setHairclaring(0);
              }}>
              <Text style={{color: '#2d3925', fontSize: 28, fontWeight: '900'}}>
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          bottom: 0,
          backgroundColor: '#2d3925',
          height: '8%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}>
        <TouchableOpacity
          onPress={() => {
            proceedFunc();
          }}>
          <Text style={{fontSize: 24, fontWeight: '800', color: '#FAFAFA'}}>
            {'Proceed >> '}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={registration}>
        <View
          style={{
            height: windowHeight - 350,
            width: windowWidth - 40,
            backgroundColor: '#FAFAFA',
            borderRadius: 4,
          }}>
          <Registration
            close={closeRegistrationPage}
            setRegistred={setRegistred}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efd8ce',
  },
  serviceIcon: {
    height: 60,
    width: 60,
  },
  serviceView: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 24,
    borderBottomWidth: 2,
    paddingBottom: 18,
  },
  serviceLeftView: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  serviceRightView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 125,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#2d3925',
  },
});
export default ServicesPage;
