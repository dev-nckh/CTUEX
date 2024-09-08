import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Product = () => {
  return (
    <View style={{
        width: 130,
        height: 200,
        paddingTop:10,
    }}>

        <Image 
            source={require('../../../assets/img/pro.png')}
                style={{
                    width: 130,
                    height: 150,
                    borderColor: 'rgba(238,238,238,1)',
                    borderRadius: 10,
                    borderWidth: 1,
            }}
            resizeMode='cover'
        />
        <Text style={{
            fontSize: 13,
            paddingLeft:5,
            paddingTop:5
            }}
            numberOfLines={1}
            ellipsizeMode='tail'
            
        >
            HADES LEGENDS INFINITY TANKTOP
        </Text>
            <Text style={{
            fontSize: 13,
            paddingLeft:5,
            fontWeight:'bold',
            paddingTop:2
        }}>380.000đ</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})