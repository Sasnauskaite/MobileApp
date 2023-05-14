
import { StyleSheet, Text, View, Spacer, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../firebase';
import { TouchableOpacity } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';

function PostScreen() {
  const username = auth.currentUser.email;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainInfoView}>
        <View>
          <Text style={styles.userName}>Creating post as: {username}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.WhatIask4}>Item description:</Text>
        <TextInput 
          placeholder={"Describe the item that you're selling"}
          keyboard={'default'}
          multiline={true}
          style={styles.input}
          inputStyle={{
            height: 130,
            paddingHorizontal: 10,
            textAlignVertical: 'top',
          }}
        />
        <Text style={styles.WhatIask4}>Contacts:</Text>
        <TextInput 
          placeholder={"Please input your contact information"}
          keyboard={'default'}
          multiline={false}
          style={styles.inputContact}
          inputStyle={{
            height: 130,
            paddingHorizontal: 10,
            textAlignVertical: 'top',
          }}
        />
        <Text style={styles.WhatIask4}>Image of item for sale: </Text>
        <View style={[styles.columns, {alignItems: 'center', paddingTop: 10}]}>
            <Button style={styles.cardStyle}>
              <Ionicons
                name='ios-image-outline'
                color={'#0B5799'} 
                size={60} 
              />
            </Button>
            <Button style={styles.cardStyle}>
              <Ionicons
                name='md-camera-outline'
                color={'#0B5799'} 
                size={60}
              />
            </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>POST</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#AFD0F3',
    }, 
    columns: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    selection: {
      paddingBottom: 10,
      color:'#0B5799', 
      fontSize:15,
    },
    cardStyle: {
      width: '45%',
      marginHorizontal: 10,
      backgroundColor: 'white',
    },
    imageLoad: {
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: '#D6EDFF',
    },
    input: {
      backgroundColor: '#D6EDFF',
      marginHorizontal: 5,
      marginBottom: 5,
      borderRadius: 5,
      height: 130,
      paddingHorizontal: 10,
      textAlignVertical: 'top',
    },
    inputContact: {
      backgroundColor: '#D6EDFF',
      marginHorizontal: 5,
      marginBottom: 5,
      borderRadius: 5,
      height: 50,
      paddingHorizontal: 10,
      textAlignVertical: 'top',
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 1,
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
    userName: {
      color: '#e32f35',
      paddingBottom: 5,
      fontSize: 16,
    },
    mainInfoView: {
      alignItems: 'center',
      backgroundColor: '#AFD0F3',
    },
    WhatIask4: {
      paddingHorizontal:15, 
      color:'#0B5799', 
      fontSize:15,
    }
  })