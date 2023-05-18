//import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { ScrollView } from 'react-native'
import { getDatabase, ref, onValue } from 'firebase/database';
import { DataSnapshot } from 'firebase/database';




const HomeScreen = () => {

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView >
          <Text style={styles.selection}>HELLO</Text>
        </KeyboardAvoidingView>
    </View>
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
  selection: {
    alignSelf: 'center',
    paddingBottom: 10,
    color:'#0B5799', 
    fontSize:18,
  },
  scrollContainer: {
    flex: 1,
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