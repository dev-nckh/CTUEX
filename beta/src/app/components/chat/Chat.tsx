import { StyleSheet, Text, View, Platform, FlatList, Dimensions,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { FullWindowOverlay } from 'react-native-screens';

const Chat = () => {

  return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            paddingTop: 7,
            paddingLeft: 10,
            paddingRight: 10
        }}>
            <View style={{
                flex:1,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                backgroundColor:'white',
                borderWidth: 1,
                borderColor: '#e0e0e0',
                borderRadius: 12,
                paddingLeft: 15,
                height : 95
            }}>
                <Image 
                    source={require('../../../../assets/img/ctu.png')}
                    style={{
                    width: 70,
                    height: 70,
                    borderWidth: 1,
                    borderRadius: 100,
                    }}
                    resizeMode='cover'
                />
                <View style={{flex: 1}}>
                    <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={{
                        fontSize:Platform.OS === 'ios' ? 14 : 16, flexDirection: 'column', alignItems:'center'
                    }}
                    >Khách hàng</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingRight : 10
                    }}>
                        <Text style={{fontSize: Platform.OS === 'ios' ? 13 : 14,paddingTop: 10}}>1234 alo</Text>
                        <Text style={{fontSize: Platform.OS === 'ios' ? 13 : 14,paddingTop: 10, fontWeight: 'bold'}}>12:34</Text>
                    </View>
                </View>
            </View>
        </View>
  )
}

export default Chat