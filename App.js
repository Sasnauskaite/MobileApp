import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBarStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import Profile from './screens/ProfileScreen';
import Messages from './screens/MessagesScreen';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor='#AFD0F3'/>
      < Tab.Screen 
        name="Login"
        component={LoginScreen} 
        options={{ 
          headerShown: false 
        }}  
      />
      <Tab.Navigator 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#7DC2FF',
          tabBarInactiveBackgroundColor: '#fff'
        }}>
        < Tab.Screen 
          name="SHOP" 
          component={HomeScreen} 
          options={{
            headerShown: true,
            headerShadowVisible: true,
            headerTintColor: '#0B5799',
            headerStyle: {
              backgroundColor: '#AFD0F3',
            },
            headerRight: () => (
              <Ionicons 
                name='chatbubbles-outline' 
                color='#0B5799' 
                onPress={() => 
                alert('We are sorry, but this action is not available right now... We are working on it!')}
                underlayColor='#fff'
                size={35}
                style={{marginRight: 15}}
              />
            ),
            tabBarLabel: 'SHOP',
            tabBarIcon: ({size}) => (
              <Ionicons name="menu" color={'#0B5799'} size={size} />
            ),
          }}
        />
        < Tab.Screen  
          name="CART"
          component={CartScreen} 
          options={{
            headerShown: true,
            headerShadowVisible: true,
            headerTintColor: '#0B5799',
            headerStyle: {
              backgroundColor: '#AFD0F3',
            },
            headerRight: () => (
              <Ionicons 
                name='chatbubbles-outline' 
                color='#0B5799' 
                onPress={() => 
                alert('We are sorry, but this action is not available right now... We are working on it!')}
                underlayColor='#fff'
                size={35}
                style={{marginRight: 15}}
              />
            ),
            tabBarLabel: 'CART',
            tabBarIcon: ({size}) => (
              <Ionicons name="cart" color={'#0B5799'} size={size} />
            ),
          }}
        />
        < Tab.Screen 
          name="PROFILE" 
          component={Profile} 
          options={{
            headerShown: true,
            headerShadowVisible: true,
            headerTintColor: '#0B5799',
            headerStyle: {
              backgroundColor: '#AFD0F3',
            },
            headerRight: () => (
              <Ionicons 
                name='chatbubbles-outline' 
                color='#0B5799' 
                onPress={() => 
                alert('We are sorry, but this action is not available right now... We are working on it!')}
                underlayColor='#fff'
                size={35}
                style={{marginRight: 15}}
              />
            ),
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({size}) => (
              <Ionicons name="person" color={'#0B5799'} size={size} />
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
