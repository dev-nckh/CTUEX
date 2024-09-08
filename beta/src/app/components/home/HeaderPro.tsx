import { StyleSheet, Text, View,Dimensions,Pressable } from 'react-native'
import React, { useState } from 'react'

const HeaderPro = () => {
    const [first, setfirst] = useState(true)
    const {width} = Dimensions.get('window')
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
      }}>
        <Pressable
            style={{
                flex: 1,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: first ? '#aecee3' : '#2980b8',
                borderRadius: 10,
                marginRight: 5
            }}
            onPress={() => setfirst(true)}
        >
            <Text style={{
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold'
            }}>Mua sản phẩm mới</Text>
        </Pressable>
        <Pressable
            style={{
                flex: 1,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: first ? '#2980b8' : '#aecee3',
                borderRadius: 10,
                marginLeft: 5
            }}
            onPress={() => setfirst(false)}
        >
            <Text style={{
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold'
            }}>Mua sản phẩm cũ</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default HeaderPro

const styles = StyleSheet.create({
    container:{
        marginTop:10
    }
})