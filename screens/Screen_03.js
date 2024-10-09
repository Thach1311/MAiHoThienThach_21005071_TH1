import { Image, TouchableOpacity } from 'react-native';
import { View, Text, ScrollView } from 'react-native';
import { useState, useEffect, useCallback, useMemo } from 'react';

function Screen_03({ navigation }) {
  const [itemQuantities, setItemQuantities] = useState([2, 1, 3, 1, 1, 1]); // Initial quantities from the data
  const [totalPrice, setTotalPrice] = useState(0); // Total price state

  // Memoize the data array
  const data = useMemo(() => [
    {
      url: require('../assets/Data/Image_101.png'),
      des: 'Apple Italia Piada',
      price: 28.0,
    },
    {
      url: require('../assets/Data/Image_107.png'),
      des: 'Pear American',
      price: 15.0,
    },
    {
      url: require('../assets/Data/Image_105.png'),
      des: 'Coconut VietNam',
      price: 10.0,
    },
    {
      url: require('../assets/Data/Image_106.png'),
      des: 'Apricot China',
      price: 9.0,
    },
    {
      url: require('../assets/Data/Image_106.png'),
      des: 'Orange ThaiLand',
      price: 8.0,
    },
    {
      url: require('../assets/Data/Image_103.png'),
      des: 'Avocado VietNam',
      price: 10.0,
    },
  ], []); // Static data

  // Function to calculate total price
  const calculateTotal = useCallback(() => {
    let total = 0;
    itemQuantities.forEach((quantity, index) => {
      total += quantity * data[index].price; // Multiply price by quantity
    });
    setTotalPrice(total);
  }, [itemQuantities, data]);

  // Call calculateTotal when quantities change
  useEffect(() => {
    calculateTotal();
  }, [itemQuantities, calculateTotal]);

  // Increment and decrement quantity functions
  const increment = (index) => {
    const updatedQuantities = [...itemQuantities];
    updatedQuantities[index] += 1;
    setItemQuantities(updatedQuantities);
  };

  const decrement = (index) => {
    const updatedQuantities = [...itemQuantities];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
    }
    setItemQuantities(updatedQuantities);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen_02')}>
        <Image
          source={require('../assets/Data/Image_183.png')}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>

      <Text
        style={{
          color: '#52de81',
          fontWeight: '800',
          fontSize: 24,
          marginBottom: 20,
        }}>
        My Basket
      </Text>

      <ScrollView style={{ width: '100%' }}>
        {data.map((value, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 5,
              marginBottom: 10,
            }}>
            <Image style={{ height: 50, width: 50 }} source={value.url} />

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                marginLeft: 10,
              }}>
              <Text style={{ color: '#65e490' }}>
                ${value.price.toFixed(2)}
              </Text>
              <Text>{value.des}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => decrement(index)}>
                <Image
                  source={require('../assets/Data/Image_176.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>

              <Text style={{ marginHorizontal: 10 }}>
                {itemQuantities[index]}
              </Text>

              <TouchableOpacity onPress={() => increment(index)}>
                <Image
                  source={require('../assets/Data/Image_175.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#000',
          marginVertical: 20,
        }} />

      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={{ color: '#9a74e6', fontWeight: '800' }}>Total: </Text>
          <Text style={{ color: '#9a74e6', fontWeight: '800' }}>
            ${totalPrice.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Screen_04')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
            height: 50,
            backgroundColor: '#1dd75b',
            borderRadius: 20,
          }}>
          <Text style={{ color: 'white' }}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Screen_03;