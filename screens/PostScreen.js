
import { StyleSheet, Text, View, Image, Alert} from 'react-native';
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../firebase';
import { TouchableOpacity } from 'react-native';
//import { getDatabase } from 'firebase/database';
import { getDatabase, ref, push, set } from 'firebase/database';

function PostScreen() {
  const username = auth.currentUser.email;
  const user = auth.currentUser.uid;

  const [description, setDescription] = useState("");
  const [contacts, setContacts] = useState("");
  const [price, setPrice] = useState("");

  

  function createPost(username, description, contacts, price) {
    console.log('Username:', username);
    console.log('Description:', description);
    console.log('Contacts:', contacts);
    console.log('Price:', price);
  
    const database = getDatabase();
    const postsRef = ref(database, 'itemsForSale');
    
    const newPostRef = push(postsRef);
    const newPostKey = newPostRef.key;
    
    const postData = {
      username: username,
      description: description,
      contacts: contacts,
      price: price
    };
  
    set(newPostRef, postData)
      .then(() => {
        console.log('Data saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  }


/*
  function createPost (username, description, contacts, price) {
    console.log('UID: ', user)
    console.log('text: ', username)
    console.log('description: ', description)
    console.log('contacts: ', contacts)
    console.log('price: ', price)

    //const postRef = ref.child('itemsForSale');
    
    const database = getDatabase();
    const postsRef = database().ref('https://sellart-s-default-rtdb.europe-west1.firebasedatabase.app/');
    console.log('IM HERE')
    const newPost = postsRef.push();
    newPost.push().set({
        username: {username},
        description: {description},
        contacts: {contacts},
        price: {price}
    }).then((data)=>{
      //success callback
      console.log('Saved data: ', data)
    }).catch((error)=>{
      //error callback
      console.log('Error occured: ', error)
    })
  }
  */
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
          style={styles.input}
          placeholder={"Describe the item that you're selling"}
          keyboardType={'default'}
          editable
          maxLength={200}
          inputStyle={{
            marginHorizontal: 5,
            marginBottom: 5,
            borderRadius: 5,
            height: 130,
            paddingHorizontal: 10,
            //textAlignVertical: 'top',
          }}
          multiline
          numberOfLines={5}
          activeUnderlineColor="red"
          onChangeText={text => setDescription(text)}
        />
        <Text style={styles.WhatIask4}>Contacts:</Text>
        <TextInput 
          placeholder={"Please input your contact information"}
          keyboardType={'default'}
          multiline={false}
          style={styles.inputContact}
          activeUnderlineColor='red'
          onChangeText={text => setContacts(text)}
        />
        <Text style={styles.WhatIask4}>Price of the item: </Text>
        <TextInput 
          placeholder={"Please input the desireable price in EUR"}
          keyboardType={'numeric'}
          multiline={false}
          style={styles.inputPrice}
          activeUnderlineColor='red'
          onChangeText={text => setPrice(text)}
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
                  width: 70, 
                  height: 70,
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
                  width: 70, 
                  height: 70,
                }}
              />
              <Text style={styles.selection}>Take a photo</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button}
          onPress={() => 
            {createPost(username, description, contacts, price)}}>
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
    inputPrice: {
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