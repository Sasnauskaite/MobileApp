
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function PostScreen() {
  return (
    <View style={styles.container}>
        <Text>Post Screen</Text>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#AFD0F3',
    }, 
  })