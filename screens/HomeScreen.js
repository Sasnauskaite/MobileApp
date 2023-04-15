//import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'


const HomeScreen = () => {
  return (
    <KeyboardAvoidingView 
      style={styles.container}>
      <Text>HOME!</Text>
    </KeyboardAvoidingView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AFD0F3',
  }, 
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  bottomTab: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom:10,
  },
})