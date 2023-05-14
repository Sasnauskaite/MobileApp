import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import Profile from './screens/ProfileScreen';
import Messages from './screens/MessagesScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70, 
      borderRadius: 35,
      backgroundColor: '#e32f35'
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#AFD0F3'/>
      <Tab.Navigator 
        initialRouteName="Login"
        screenOptions={{
          tabBarShowLabel: false,
        }}>
        <Tab.Screen 
          name="Login"
          component={LoginScreen} 
          options={{ 
            headerShown: false,
            tabBarStyle: {display: 'none'},
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen 
          name="SHOP" 
          component={HomeScreen} 
          options={{
            headerShown: true,
            headerShadowVisible: true,
            headerTintColor: '#0B5799',
            headerStyle: {
              backgroundColor: '#AFD0F3',
            },
            headerRight: ({focused}) => (
              <Ionicons 
                name='chatbubbles-outline' 
                color={focused ? '#e32f35' : '#0B5799'} 
                onPress={() => 
                  alert('We are sorry, but this action is not available right now... We are working on it!')
                }
                underlayColor='#fff'
                size={35}
                style={{marginRight: 15}}
              />
            ),
            tabBarLabel: 'SHOP',
            tabBarIcon: ({focused, color, size}) => (
              <Ionicons 
                name={focused ? "menu" : 'menu'} 
                color={focused ? '#e32f35' : '#0B5799'} 
                size={40} 
              />
            ),
          }}
        />
        <Tab.Screen 
          name="ADDING NEW ITEM" 
          component={PostScreen}
          options={{
            headerShown: true,
            headerShadowVisible: true,
            headerTintColor: '#0B5799',
            headerStyle: {
              backgroundColor: '#AFD0F3',
            },
            headerRight: ({focused}) => (
              <Ionicons 
                name='chatbubbles-outline' 
                color={focused ? '#e32f35' : '#0B5799'} 
                onPress={() => 
                alert('We are sorry, but this action is not available right now... We are working on it!')}
                underlayColor='#fff'
                size={35}
                style={{marginRight: 15}}
              />
            ),
            tabBarLabel: 'ADD',
            tabBarIcon: ({}) => (
              <Image
                source={require('./assets/plus.png')}
                resizeMode='contain'
                style={{
                  width: 30, 
                  height: 30,
                  tintColor: '#fff'
                }}
              />
            ),
            tabBarButton: (props) => (
              <CustomTabBarButton {...props} />
            )
          }}
        />
        <Tab.Screen 
          name="PROFILE" 
          component={Profile} 
          options={{
            headerShown: true,
            headerShadowVisible: true,
            headerTintColor: '#0B5799',
            headerStyle: {
              backgroundColor: '#AFD0F3',
            },
            headerRight: ({focused}) => (
              <Ionicons 
                name='chatbubbles-outline' 
                color={focused ? '#e32f35' : '#0B5799'} 
                onPress={() => 
                alert('We are sorry, but this action is not available right now... We are working on it!')}
                underlayColor='#fff'
                size={35}
                style={{marginRight: 15}}
              />
            ),
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({focused, color, size}) => (
              <Ionicons 
                name={focused ? 'person' : 'person'} 
                color={focused ? '#e32f35' : '#0B5799'} 
                size={30} 
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigatorTab: {
    backgroundColor: '#0090FF',
  },
});
