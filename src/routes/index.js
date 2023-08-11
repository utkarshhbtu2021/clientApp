import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from './screen';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={screens.Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Service" component={screens.Service} />
        <Stack.Screen name="Slots" component={screens.SlotsBooking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
