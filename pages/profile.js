import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
  } from "react-native";
import { TouchableOpacity } from "react-native";

  import image from '../assets/logo.png';

const  Profile= ({navigation}) => {

    return ( 
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <View style={{ width: '100%', height: '40%', backgroundColor: 'white', alignItems: 'center'}}>
        
          <View style={{flexDirection:'row',width:'90%',justifyContent:"space-between",marginTop:50}}>
          <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('landingPage')}>
          <Image
            source={
              require('../assets/back.png')
            }
            style={{width:25,height:25,marginLeft:'auto',marginRight:'auto'}}
          /></TouchableOpacity>
         
          <Image source={image} style={styles.logo} />
            </View>

        <View style={{width:120,height:120,}}>
          <Image
            source={
              require('../assets/profile.png')
            }
            style={{width:100,height:100,marginLeft:'auto',marginRight:'auto'}}
          /></View>
        </View>

  
        <View style={{ width: '100%', height: "50%", backgroundColor: "#2B2C34", borderTopEndRadius: 21, borderTopStartRadius: 21 }}>
          <Text style={styles.signIn}>Welcome</Text>
         
          <View style={styles.input}>
            <Text style={{color:'white',fontSize:20}}>Name</Text>
          </View> 
          <View style={styles.input}>
            <Text style={{color:'white',fontSize:20}}>Email</Text>
          </View>

          <View style={styles.input}>
            <Text style={{color:'white',fontSize:20}}>Contact no</Text>
          </View>
          
        </View>
      </View>
     );   
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      logo: {
        width: '52px',
        height: '52px'
      },
      signIn: {
        color: 'white',
        textAlign: "center",
        fontSize: 20,
        marginTop: 30,
        fontSize:24,
        fontWeight:600
      },
      input: {
        width:'90%',
        color: 'white',
        borderWidth: 5,
        padding: 10,
        margin: 3,
        borderBottomColor: 'white',
        borderEndColor: '#2B2C34',
        borderLeftColor: "#2B2C34",
        borderTopColor: '#2B2C34',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:8,
      },
      back:{
        width: '52px',
        height: '52px',
        borderRadius:'50%',
        backgroundColor: 'rgba(217, 217, 217, 0.75)',
        justifyContent:'center'
      },
      
  });
  
 
export default Profile;