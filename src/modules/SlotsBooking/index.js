import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import useLogo from '../../asserts/userlogo.png';
import Slots from './slot';

const SlotsBooking = () => {
  const [weekDate, setWeekDate] = useState([]);
  const [slectDate, setSelectDate] = useState(0);
  const slotsData = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
  ];

  const funcGetWeekArray = () => {
    let currentDate = new Date();
    let next7Days = [];
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    for (let i = 0; i < 7; i++) {
      let nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + i);
      let dayOfWeek = daysOfWeek[nextDay.getDay()];
      let dayOfMonth = nextDay.getDate();
      let formattedDate = dayOfWeek + ', ' + dayOfMonth;
      next7Days.push(formattedDate);
    }
    return next7Days;
  };

  useEffect(() => {
    setWeekDate(funcGetWeekArray);
  }, []);
  return (
    <>
      <SafeAreaView>
        <View style={styles.TopView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.logoImg}
              resizeMode="contain"
              source={useLogo}
            />
            <View style={{width: '45%'}}>
              <View style={styles.nameViewTopDivder}></View>
              <Text style={{fontSize: 18, color: '#FAFAFA'}}>
                Utkarsh Pratap Singh
              </Text>
              <Text style={{fontSize: 14, color: '#FAFAFA', marginTop: 4}}>
                {' '}
                Deokali Kerakat Jaunpur{' '}
              </Text>
              <View style={styles.nameViewBottomDivder}></View>
            </View>
          </View>
          <View style={{marginLeft: 12, marginTop: 18}}>
            <Text style={{color: '#FAFAFA', fontSize: 16, fontWeight: '700'}}>
              CHOICE YOUR SLOTS
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: '#efd8ce',
                width: '30%',
                marginTop: 8,
              }}></View>
            <View style={{marginTop: 18}}>
              <FlatList
                data={weekDate}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectDate(index);
                    }}
                    style={
                      index == slectDate
                        ? styles.selectedWeekDate
                        : styles.weekDate
                    }>
                    <Text style={{color: '#efd8ce'}}>{item.split(',')[0]}</Text>
                    <Text style={{color: '#efd8ce'}}>{item.split(',')[1]}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
        <View style={{height: 4, backgroundColor: '#efd8ce'}}></View>
        <View style={{height: 4, backgroundColor: '#2d3925'}}></View>
        <View style={{height: '54%', backgroundColor: '#efd8ce'}}>
          <Text style={styles.choiseHedding}> CHOICE YOUR TIME</Text>

          <View>
            <Slots data={slotsData} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
  },

  TopView: {
    height: '45%',
    backgroundColor: '#2d3925',
    paddingTop: 12,
  },

  nameViewTopDivder: {
    borderTopWidth: 2,
    borderColor: '#FAFAFA',
    width: '80%',
    marginBottom: 8,
  },
  nameViewBottomDivder: {
    borderTopWidth: 2,
    borderColor: '#FAFAFA',
    width: '80%',
    marginTop: 12,
  },

  logoImg: {
    height: 126,
    width: 126,
  },
  weekDate: {
    padding: 13,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  selectedWeekDate: {
    padding: 13,

    marginLeft: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#efd8ce',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },

  choiseHedding: {
    color: '#2d3925',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#2d3925',
    width: '40%',
    paddingBottom: 8,
  },
});

export default SlotsBooking;
