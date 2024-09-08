import { StyleSheet, Text, View, Platform, FlatList, Dimensions,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Cart from '../components/cart/Cart'

const CartScreen = () => {
  const { height } = Dimensions.get('window');
  const [IsPress, setIsPress] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList
        data={[1,2,3,4,5,6,7,8,9,10]}
        renderItem={({item}) => <Cart />}
        initialNumToRender={5}
        onEndReached={() => {
          // Load more data here when the user scrolls to the end
          // You can implement your data loading logic here
        }}
        onEndReachedThreshold={0.1}
        maxToRenderPerBatch={5}
        windowSize={5}
        contentContainerStyle={{ paddingBottom: 200 }} // Add padding to the bottom of the list
      />
      <View style={styles.bottomView}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop:20}}>
          <TouchableOpacity onPress={() => setIsPress(!IsPress)}>
            <Image
              source={IsPress ? require('../../../assets/img/checkbox.png') : require('../../../assets/img/box-nofill1.png')}
              style={{width: 24, height: 24, marginRight: 10}}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Tất cả</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start',}}>
          <Text style={{fontSize: 9, fontWeight: '500',marginTop:10,paddingRight:10}}>Tổng thanh toán 
            <Text style={{color: 'rgba(252,129,65,1)', fontWeight: 'bold'}}>100.000đ</Text>
          </Text>
          <View style={{
            backgroundColor: '#64a2cb',
            height: 60,
            width: 120,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '500',
            }}>Mua hàng (10)</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {

  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 20,
    paddingLeft: 20,
    
  },
})