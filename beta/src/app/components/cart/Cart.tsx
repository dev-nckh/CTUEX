import { StyleSheet, Text, View,Image,Platform,Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Cart = () => {
  const {width,height} = Dimensions.get('window');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{
      backgroundColor: 'white',
      padding: 15,
      width: width * 0.95,
      marginHorizontal: width * 0.025,
      marginTop: 7,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#e0e0e0',
    }}>
      <Text style={{fontSize: Platform.OS === 'ios' ? 16 : 18, fontWeight: 'bold', paddingLeft: 40, paddingBottom: 8}}>HADES STORE</Text>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
      }}>
        <TouchableOpacity onPress={() => setIsFocused(!isFocused)}>
          <Image 
            source={isFocused ? require('../../../../assets/img/checkbox.png') : require('../../../../assets/img/box-nofill1.png')}
            style={{width: 26, height: 26}}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        }}>
          <Image 
            source={require('../../../../assets/img/pro.png')}
            style={{
              width: 90,
              height: 90,
              borderWidth: 1,
              borderColor: '#e0e0e0',
              borderRadius: 12,
            }}
            resizeMode='cover'
          />
          <View style={{flex: 1}}>
            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={{
                fontSize:Platform.OS === 'ios' ? 14 : 16,
              }}
            >HADES LEGENDS INFINITY TANKTOP</Text>
            <Text style={{fontSize: Platform.OS === 'ios' ? 13 : 14,paddingTop: 4}}>Size: M</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 12,
            }}>
              <Text style={{
                fontSize:Platform.OS === 'ios' ? 16 : 18,
                fontWeight: 'bold',
                color: '#64a2cb',
              }}>380.000đ</Text>
              <View style={{
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: '#CBC9C9',
                borderRadius: 6,
                paddingHorizontal: 6,
                paddingVertical: 6,
                width: 90,
              }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Image 
                    source={require('../../../../assets/img/minus1.png')}
                    style={{width: 14, height: 14}}
                    resizeMode='contain'
                  />
                </View>
                <View style={{
                  width: 1,
                  height: 18,
                  backgroundColor: '#CBC9C9',
                  marginHorizontal: 4,
                }} />
                <Text style={{
                  flex: 2,
                  textAlign: 'center',
                  fontSize: 14,
                }}>1</Text>
                <View style={{
                  width: 1,
                  height: 18,
                  backgroundColor: '#CBC9C9',
                  marginHorizontal: 4,
                }} />
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Image 
                    source={require('../../../../assets/img/plus.png')}
                    style={{width: 14, height: 14}}
                    resizeMode='contain'
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})