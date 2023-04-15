
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function ProfileScreen() {
  return (
    <View style={styles.container}>
        <Text>Profile</Text>
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
  })