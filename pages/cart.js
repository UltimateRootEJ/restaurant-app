import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,TouchableOpacity, FlatList, ScrollView
} from "react-native";

const  Cart= ({route,navigation}) => {
  const {data}=route.params;
  const {total}=route.params;
  const {cart}=route.params;
  console.log('cart',cart)


  return ( 
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <View
        style={{width: "100%", height: "30%", backgroundColor: "white", alignItems: "center", justifyContent: "center"}}
      >
         <Image
          source={
            "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          }
          style={styles.logo}
        />
        <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('landingPage')}>
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
         <Text style={{fontSize:27,fontWeight:600,marginLeft:'-80%'}}>Cart</Text>

         <FlatList
      data={cart}
      renderItem={({item,i}) =>(
          <View key={i} style={styles.card}>
          <Image
          source={item.image} style={{width:80,height:80,borderRadius:14}}/>
         <View style={{alignItems:'center'}}>
         <Text style={{fontSize:22,fontWeight:700}}>{item.name}</Text>
          <Text style={{fontSize:18,fontWeight:500}}>R{item.price}.00</Text>
         </View>
          <View>
          <Text style={{fontSize:28,fontWeight:700}}></Text>
          <Text style={{fontSize:22,fontWeight:700}}>{item.quantity}</Text>
          <Text style={{fontSize:28,fontWeight:700}}></Text>
          </View>
      </View>
      )} style={{width:'100%'}}/> 

      <View style={styles.bottomView}>
        <Text style={{color:'white',fontSize:18,fontWeight:500,marginLeft:80,marginTop:20}}>R {total}.00</Text>
        <Text style={{color:'#D9D9D9',fontWeight:500,marginLeft:88}}>{cart.length} Items</Text>
        <TouchableOpacity style={styles.checkoutBtn} onPress={()=>{navigation.navigate('payment',{cart:cart,total:total})}}>
          <Text style={{color:'white',fontWeight:500}}>Checkout</Text>
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
    height: "80%",
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
      flexDirection:'row'
    },
    card:{
      marginTop:10,
      borderRadius:16,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:'100%',
      height:120,
      elevation:3
    }
});


export default Cart;