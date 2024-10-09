
import { Image,View, Text,TouchableOpacity,StyleSheet } from 'react-native'
export default function  Screen_01 ({navigation}){

    return (
        <View>
           <Text style={styles.custom1}>Order your favorite!</Text>
           <Image source={require('../assets/Data/Image_96.png')} style={{marginLeft:'215px'}}></Image>
           <Image source={require('../assets/Data/Image_95.png')}></Image>
           <Image source={require('../assets/Data/Image_97.png')}  style={{marginLeft:'200px'}} ></Image>
           <View style={styles.custom2}>
              <TouchableOpacity style={styles.custom3}><Text style={{color:'white'}} onPress={()=>{navigation.navigate("Screen_02")}} >Get Start</Text></TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    custom1:{
        fontSize:'30px', 
        color:'#09d44c', 
        fontWeight:'300', 
        display:'flex', 
        justifyContent:'center'
    },
    custom2:{
        display:'flex',justifyContent:'center',marginTop:'30px',alignItems:'center'
    },
    custom3:{
        backgroundColor:'#09d44c',
        borderRadius:'15px',
        width:'150px',
        height:'30px',
        color:'#fff',
        border:'none',
        alignItems:'center',
        justifyContent:'center'
    }
})




