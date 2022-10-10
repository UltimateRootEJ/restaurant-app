import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,TouchableOpacity, FlatList, ScrollView
  } from "react-native";

const  Order= ({route,navigation}) => {
    const {total}=route.params;
    const {cart}=route.params;
    console.log('cart',cart)

    return ( 
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <View
          style={{width: "100%", height: "45%", backgroundColor: "white", alignItems: "center", justifyContent: "center"}}
        >
                    <Image
                      source={
                        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        }
            style={styles.logo}
          />
          <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('payment',{cart:cart,total:total})}>
          <Image
            source={
              require('../assets/back.png')
            }
            style={{width:25,height:25,marginLeft:'auto',marginRight:'auto'}}
          />
          
          </TouchableOpacity>
        
        </View>
            
        <View style={styles.wrapper}>
            <TouchableOpacity style={{width: '53px',height: '5px',background: '#D9D9D9',borderRadius: '3px',marginTop: -15}}></TouchableOpacity>
            <Text style={{fontSize:27,fontWeight:600,marginTop:20}}>Order successful</Text>
            <View style={styles.card}>
            <Text style={{fontSize:27,fontWeight:600}}>Preparing your order...</Text>
            </View>
            <TouchableOpacity style={{marginTop:20}}><Text>Make a New Order</Text></TouchableOpacity>
        <View style={styles.bottomView}>
          <Text style={{color:'white',fontSize:18,fontWeight:500,marginLeft:80,marginTop:20}}>Balance due</Text>
          <Text style={{color:'#D9D9D9',fontWeight:500,marginLeft:88}}>{cart.length} Items</Text>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={{color:'white',fontWeight:500}}>R{total}.00</Text>
          </TouchableOpacity>
        </View>
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
      width: "100%",
      height: "100%",
    },
    wrapper:{
      width: "100%",
      height: "60%",
      backgroundColor: "white",
      borderTopEndRadius: 21,
      borderTopStartRadius: 21,
      padding: 25,
      position: "absolute",
      bottom: 0, 
      alignItems:'center'
    },
    bottomView:{
        position: 'absolute',
        width: '100%',
        height: '80px',
        left: '0px',
        bottom: 0,
        backgroundColor: '#2B2C34',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
        },
      checkoutBtn:
      {
      position: 'absolute',
      width: 110,
      height: 34,
      right:30,
      bottom: 22,
      backgroundColor: '#E85800',
      borderRadius: 8,
      textAlign:'center',
      padding:'1.6%'
      },
      back:{
        position: 'absolute',
        width: '52px',
        height: '52px',
        left: '24px',
        top: '41px',
        borderRadius:'50%',
        backgroundColor: 'rgba(217, 217, 217, 0.75)',
        justifyContent:'center'
      },
      cart:{
        position: 'absolute',
        width: '52px',
        height: '52px',
        right: '30px',
        top: '41px',
        borderRadius:'50%',
        backgroundColor: 'rgba(217, 217, 217, 0.75)',
        justifyContent:'center',
        flexDirection:'row',
      },
      card:
      {
        marginTop:50,
        width:'90%',
        height:150,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:'18',
        alignItems:'center',
        display:'flex',
        justifyContent:"space-around",
        borderRadius:18,
        
        elevation:3
    }
      
  });
  
 
export default Order;