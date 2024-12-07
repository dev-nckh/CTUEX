import { StyleSheet, Text, View, Platform, FlatList, Dimensions,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Chat from '../components/chat/Chat'
const ChatScreen = () => {
  return (
    <View >
        <View>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-evenly',
                paddingTop:15}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    width:Platform.OS === 'ios' ? 350 :  370,
                    height:45,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    justifyContent:'space-between',
                    paddingLeft:10,
                    paddingRight:5,
                    
                }}>
                    <Text style={{fontSize: Platform.OS === 'ios' ? 13 :  16, fontWeight: 'light',width: Platform.OS === 'ios' ? 160 :  180, marginLeft: 10 }}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    >
                    Nhập tên người cần tìm
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
                        source={require('../../../assets/img/search.png')}
                        style={{width: 15, height: 15}}
                        resizeMode='contain'
                    />
                    </View>
                </View>
            </View>
        </View>
        <FlatList
        data={[1,2,3,4,5,6,7,8,9,10]}
        renderItem={({item}) => <Chat />}
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
    </View>
    
  )
}

export default ChatScreen