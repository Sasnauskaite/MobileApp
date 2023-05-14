
import { StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../firebase';
import { TouchableOpacity } from 'react-native';

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
            <TouchableOpacity style={styles.cardStyle}
              onPress={() => 
                alert('We are sorry, but this action is not available right now... We are working on it!')}>
              <Image
                source={require('./galery.png')}
                resizeMode='contain'
                style={{
                  alignSelf: 'center',
                  width: 100, 
                  height: 100,
                }}
              />
              <Text style={styles.selection}>Select from galery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle}
              onPress={() => 
                alert('We are sorry, but this action is not available right now... We are working on it!')}>
              <Image
                source={require('./camera.png')}
                resizeMode='contain'
                style={{
                  alignSelf: 'center',
                  width: 100, 
                  height: 100,
                }}
              />
              <Text style={styles.selection}>Take a photo</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button}
          onPress={() => 
            alert('We are sorry, but this action is not available right now... We are working on it!')}>
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
      backgroundColor: '#AFD0F3',
    }, 
    columns: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    selection: {
      alignSelf: 'center',
      paddingBottom: 10,
      color:'#0B5799', 
      fontSize:18,
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
      backgroundColor: '#44A0FF',//'white',
      marginTop: 25,
      borderColor: '#44A0FF',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',//'#44A0FF',
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