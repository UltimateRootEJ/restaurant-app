import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import image from './assets/logo.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterUser from './pages/Register';
import ResetPassword from './pages/forgotPassword';
import Landing from './pages/landingPage';
import More from './pages/moreDetails';
import Cart from './pages/cart';
import Order from './pages/order';
import Payment from './pages/payment';
import Profile from './pages/profile';
import { TouchableOpacity} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from './config/firebase';
import { useState } from 'react';




function HomeScreen({navigation}) {
  // const handleSignIn=()=>(
  //  navigation.navigate('landingPage')
  // )
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')

  const handleSignIn=(()=>
  {
     
  signInWithEmailAndPassword(auth,email,password).then((userCredential)=>
  {
      const user = userCredential.user;
      navigation.navigate('landingPage')
     
  }).catch((error)=>{
      console.log(error)
  })        
     
       }
 
  )


  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={image} style={styles.logo} />
      </View>

      <View style={{ width: '100%', height: "50%", backgroundColor: "#ADD8E6", borderTopEndRadius: 21, borderTopStartRadius: 21 }}>
        <Text style={styles.signIn} >Sign In</Text>
        <TextInput
          style={styles.input} value={email}
          placeholder="Email Adress" 
          onChangeText={text => setEmail(text)}/>

        <TextInput
          style={styles.input} value={password}
          placeholder="Password" 
          onChangeText={text => setPassword(text)}/>
        <Text style={{ color: "black", textAlign: 'center', margin: 10 }} onPress={()=>navigation.navigate('Register')}>Don't Have Account?</Text>

        <Text style={{ color: "black", textAlign: 'center', margin: 10 }} onPress={()=>navigation.navigate('forgotPassword')}>Forgot Password?</Text>

        <TouchableOpacity style={{
          backgroundColor: '#EDEADE',textAlign: 'center',padding: 7,marginTop: 10,width: "50%",textAlign: 'center',borderRadius: 5,alignSelf:'center'
        }}>
          <Text style={{color: 'black'}} onPress={handleSignIn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterUser} />
      <Stack.Screen name="landingPage" component={Landing}/>
      <Stack.Screen name="cart" component={Cart}/>
      <Stack.Screen name="payment" component={Payment}/>
      <Stack.Screen name="order" component={Order}/>
        <Stack.Screen name="forgotPassword" component={ResetPassword} />
        <Stack.Screen name="moreDetails" component={More} />
        <Stack.Screen name="profile" component={Profile} /> 


      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,    
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200
  },
  signIn: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight:"500",
    marginTop: 30
  },
  input: {
    width:"90%",
    color: "black",
    borderWidth: 5,
    padding: 10,
    margin: 3,
    borderBottomColor: "white",
    borderEndColor: "#2B2C34",
    borderLeftColor: "#2B2C34",
    borderTopColor: '#2B2C34',
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:8,
  },
});