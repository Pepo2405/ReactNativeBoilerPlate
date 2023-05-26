/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Home() {
  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
}

function Info() {
  return (
    <View>
      <Text>Info</Text>
    </View>
  );
}

type Route = 'Home' | 'Info' | 'Pokemons';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const getIcon = (route: Route = 'Home', color: string) => {
    const Icons = {
      Home: 'home-circle',
      Info: 'information-outline',
      Pokemons: 'pokemon-go',
    };
    // let icon = '';
    return <Icon name={Icons[route]} size={25} color={color} />;
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => getIcon(route.name as Route, color),
          tabBarInactiveTintColor: '#09a',
          tabBarActiveTintColor: 'tomato',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Pokemons" component={Info} />
        <Tab.Screen name="Info" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
