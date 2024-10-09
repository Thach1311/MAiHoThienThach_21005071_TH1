import { Image, TouchableOpacity } from "react-native"
import { View, Text , TextInput,StyleSheet} from 'react-native';
export default function Screen_02 ({ navigation }){

    const data = [
        {
            name: 'Apple',
            url: '../assets/Data/Image_101.png',

        },
        {
            name: 'Pear',
            url: '../assets/Data/Image_102.png',

        },
        {
            name: 'Coconut',
            url: '../assets/Data/Image_103.png',

        },
        {
            name: 'Pear',
            url: '../assets/Data/Image_105.png',

        },
        {
            name: 'Coconut',
            url: '../assets/Data/Image_106.png',

        },
        {
            name: 'Coconut',
            url: '../assets/Data/Image_107.png',

        },
        {
            name: 'Pear',
            url: '../assets/Data/Image_105.png',

        },

    ];
    return (
        <View style={styles.layout}>
           <View style={{width:'400px',alignItems:'center'}}>
               <View style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'10px',width:'400px'}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Screen_01")}}><Image source={require('../assets/Data/Image_183.png')}></Image></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Screen_03")}}><Image source={require('../assets/Data/Image_182.png')}></Image></TouchableOpacity>
               </View>
    
               <View style={styles.searchForm}>
                    <TextInput style={{height:'30px',width:'100%'}} placeholder="Search"></TextInput>
              </View>
    
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginBottom:'20px' }}>
                    <View style={{margin:'5px',height:'30px', width:'100px',color:'#fff',backgroundColor:'#1dd75b',lineHeight:'30px',textAlign:'center',borderRadius:'10px'}}>Vegetable</View>
                    <View style={{margin:'5px',height:'30px', width:'100px',color:'blue',backgroundColor:'#dddd',lineHeight:'30px',textAlign:'center',borderRadius:'10px'}}>Seafood</View>
                    <View style={{margin:'5px',height:'30px', width:'100px',color:'blue',backgroundColor:'#dddd',lineHeight:'30px',textAlign:'center',borderRadius:'10px'}}>Drinks</View>
                
              </View>
              
              <View style={{display:'flex', justifyContent:'space-around',flexDirection:'row'}}>
                <Text style={{color:'#1dd75b',marginRight:'50px'}}>Order your favourite!</Text>
                <Text  style={{color:'#ee8033'}}>See all </Text>
              </View>
           </View>

         <View style={{flexWrap:'wrap',display:'flex',overflow:'scroll',flexDirection:'row'}} >
               {
                    data.map((value,index) => (
                        <View key={index} style={{backgroundColor:'#fff',display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center', height:'150px',width:'150px',borderRadius:'10px',margin:'20px'}} >
                            <TouchableOpacity onPress={()=>{navigation.navigate("Screen_03")}}>
                                 <Image source={value.url} style={{width:'120px',height:'90%'}}/>
                                <View style={{fontWeight:'700'}}>{value.name}</View>
                            </TouchableOpacity>
                        </View>
                    ))
               }
         </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    layout:{
        width:'100%',
        marginLeft:'20px',
        marginRight:'20px',
        alignItems:'center',
        height:'100%',
        overflow:'scroll'
    },
    searchForm:{
        width:'80%',
        height:'30px',
        borderWidth:'1px',
        borderColor:'black',
        borderRadius:'3px',
        marginBottom:'30px',
        marginTop:'10px',
        paddingLeft:'10px'
    }
})

