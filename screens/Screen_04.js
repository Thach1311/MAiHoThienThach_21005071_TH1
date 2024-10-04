import { Image,View,Text } from "react-native";
function Screen_04({navigation}) {
    return (
        <View>
            <Text>Mua hàng thành công </Text>
            <Image source={require('../assets/Data/thanhcong.webp')}></Image>
        </View>
    )
}

export default Screen_04;