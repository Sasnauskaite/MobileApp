
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button } from 'react-native-paper'
import { auth } from '../firebase';

const ProfileScreen = () => {
  const navigation = useNavigation()
  const logout = () => {
    navigation.navigate('Login');
    console.log('Logged out of ', auth.currentUser.email, ' account!')
  }
  return (
    <View style={styles.container}>
      <Button style={styles.button}
        onPress={()=>{
          logout();
        }}
      >
        <Text style={styles.buttonText}>LOG OUT</Text>
      </Button>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#AFD0F3',
    }, 
    button: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#44A0FF',
      borderWidth: 2,
    },
    buttonText: {
      color: '#44A0FF',
      fontWeight: '700',
      fontSize: 20,
    },
  })