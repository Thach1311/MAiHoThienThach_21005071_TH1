import { Image, TouchableOpacity } from "react-native";
import { View, Text , TextInput, StyleSheet } from 'react-native';

export default function Screen_02 ({ navigation }){

    const data = [
        { name: 'Apple', url: require('../assets/Data/Image_101.png') },
        { name: 'Pear', url: require('../assets/Data/Image_102.png') },
        { name: 'Coconut', url: require('../assets/Data/Image_103.png') },
        { name: 'Pear', url: require('../assets/Data/Image_105.png') },
        { name: 'Coconut', url: require('../assets/Data/Image_106.png') },
        { name: 'Coconut', url: require('../assets/Data/Image_107.png') },
        { name: 'Pear', url: require('../assets/Data/Image_105.png') },
    ];

    return (
        <View style={styles.layout}>
           <View style={{width: 400, alignItems: 'center'}}>
               <View style={{width: '80%', flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Screen_01")}}>
                        <Image source={require('../assets/Data/Image_183.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Screen_03")}}>
                        <Image source={require('../assets/Data/Image_182.png')} />
                    </TouchableOpacity>
               </View>
    
               <View style={styles.searchForm}>
                    <TextInput style={{height: 30, width: '100%'}} placeholder="Search" />
              </View>
    
              <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>
                    <View style={styles.categoryButton}>
                        <Text style={styles.categoryText}>Vegetable</Text>
                    </View>
                    <View style={styles.categoryButtonInactive}>
                        <Text style={styles.categoryTextInactive}>Seafood</Text>
                    </View>
                    <View style={styles.categoryButtonInactive}>
                        <Text style={styles.categoryTextInactive}>Drinks</Text>
                    </View>
              </View>
              
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={{color:'#1dd75b', marginRight: 50}}>Order your favourite!</Text>
                <Text style={{color: '#ee8033'}}>See all </Text>
              </View>
           </View>

           <View style={{flexWrap: 'wrap', flexDirection: 'row', overflow: 'scroll'}}>
               {
                    data.map((value, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <TouchableOpacity onPress={()=>{navigation.navigate("Screen_03")}}>
                                 <Image source={value.url} style={{width: 120, height: '90%'}} />
                                 <Text style={{fontWeight: '700'}}>{value.name}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
               }
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        width: '100%',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        height: '100%',
        overflow: 'scroll',
    },
    searchForm: {
        width: '80%',
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        marginBottom: 30,
        marginTop: 10,
        paddingLeft: 10,
    },
    categoryButton: {
        margin: 5,
        height: 30,
        width: 100,
        backgroundColor: '#1dd75b',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryButtonInactive: {
        margin: 5,
        height: 30,
        width: 100,
        backgroundColor: '#dddd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        color: '#fff',
    },
    categoryTextInactive: {
        color: 'blue',
    },
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: 150,
        borderRadius: 10,
        margin: 20,
    }
});
