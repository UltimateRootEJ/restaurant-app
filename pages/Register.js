import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import icon from "../assets/logo.png";
import { TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, confirmPasswordReset } from 'firebase/auth'
import { useState } from 'react'
import { auth, db } from '../config/firebase'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'

function RegisterUser() {
  

  const handleRegister = (() => {
    const collectionRef = collection(db, "users");
    createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      const userr = userCredentials.user;
    })
    const user = {
      name: name,
      surname: surname,
      email: email,
      userId: auth.currentUser.uid,
      cellphone: cellphone

    };
    console.log(user.userId)
    addDoc(collectionRef, user).then(() => {
      navigation.navigate('landingPage')
      alert("added successfully")
    }).catch((error) => { console.log(error); alert("Error while adding") })


  })


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('')
  const [cellphone, setcellphone] = useState('')

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <View
        style={{
          width: "100%",
          height: "25%",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={icon} style={styles.logo} />
      </View>

      <View
        style={{
          width: "100%",
          height: "75%",
          backgroundColor: "#ADD8E6",
          borderTopEndRadius: 21,
          borderTopStartRadius: 21,
        }}
      >
        <Text style={styles.signIn}>Sign Up</Text>
        <TextInput style={styles.input}
          value={name}
          placeholder="First Name"
          onChangeText={text => setName(text)} />

        <TextInput style={styles.input}
          value={surname}
          placeholder="Last Name"
          onChangeText={text => setSurname(text)} />

        <TextInput style={styles.input}
          value={email}
          placeholder="Email Adress"
          onChangeText={text => setEmail(text)} />

        <TextInput style={styles.input}
          value={cellphone}
          placeholder="Phone Number"
          onChangeText={text => setcellphone(text)} />

        <TextInput style={styles.input}
          value={password}
          placeholder="Create Password"
          onChangeText={text => setPassword(text)} />

        <TextInput style={styles.input} placeholder="Confirm Password" />
        <Text
          style={{ color: "black", textAlign: "center", margin: 10 }}
          onPress={() => navigation.navigate("Home")}
        >
          Already has Account?
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#EDEADE",
            textAlign: "center",
            padding: 7,
            marginTop: 10,
            width: "50%",
            textAlign: "center",
            borderRadius: 5,
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "black" }} onPress={handleRegister}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  signIn: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    width: "90%",
    color: "black",
    borderWidth: 5,
    padding: 10,
    margin: 3,
    borderBottomColor: "white",
    borderEndColor: "#2B2C34",
    borderLeftColor: "#2B2C34",
    borderTopColor: "#2B2C34",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
  },
});

export default RegisterUser;
