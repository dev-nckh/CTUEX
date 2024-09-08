import { Platform, StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'; 

const HeaderHome = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push('/(stack)/CartScreen'); 
  };
  return (
    <View style={{
        backgroundColor: '#2980b8',
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems:'center',
        }}>
          <Image 
            source={require('../../../../assets/img/logo1.png')}
            style={{width: 80, height: 80}}
            resizeMode='contain'
          />
          <View style={{
            flexDirection: 'row',
            alignItems:'center',
            width:Platform.OS === 'ios' ? 215 :  250,
            height:35,
            borderRadius: 20,
            backgroundColor: '#fff',
            justifyContent:'space-between',
            paddingLeft:10,
            paddingRight:5
          }}>
            <Text style={{fontSize: Platform.OS === 'ios' ? 13 :  16, fontWeight: 'light',width: Platform.OS === 'ios' ? 130 :  150}}
            numberOfLines={1}
            ellipsizeMode='tail'
            >
              Nhập tên sản phẩm cần tìm
            </Text>
            <View style={{
              width:40,
              height:30,
              borderRadius: 20,
              backgroundColor: '#64a2cb',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image 
                source={require('../../../../assets/img/search.png')}
                style={{width: 15, height: 15}}
                resizeMode='contain'
              />

            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems:'center',
            gap:15,
            paddingLeft:10
          }}>
            <Pressable onPress={handlePress}>
              <Image 
                source={require('../../../../assets/img/cart.png')}
                style={{width: 24, height: 24, position:'relative'}}
                resizeMode='contain'
              />
              <View style={{
                position: 'absolute',
                backgroundColor: 'rgba(252,129,65,1)',
                minWidth: 17,
                height: 17,
                borderRadius: 8.5,
                alignItems: 'center',
                justifyContent: 'center',
                top: -8,
                left: 18,
                paddingHorizontal: 4,
              }}>
                <Text style={{
                  textAlign: 'center',
                  fontSize: 10,
                  color: 'white',
                  fontWeight: 'light'
                }}>10</Text>
              </View>

            </Pressable>
            <View>
              <Image 
                source={require('../../../../assets/img/chat.png')}
                style={{width: 23, height: 23,position:'relative'}}
                resizeMode='contain'
              />
              <View style={{
                position: 'absolute',
                backgroundColor: 'rgba(252,129,65,1)',
                minWidth: 13,
                height: 13,
                borderRadius: 8.5,
                alignItems: 'center',
                justifyContent: 'center',
                top: -2,
                left: 13,
                paddingHorizontal: 4,
              }}>
              </View>
            </View>

          </View>
        </View>
      </View>
  )
}

export default HeaderHome

const styles = StyleSheet.create({})