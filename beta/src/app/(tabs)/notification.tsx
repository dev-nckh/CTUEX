import { StyleSheet, Text, View, Platform, FlatList, Dimensions,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { FullWindowOverlay } from 'react-native-screens';
import Notification from '../components/notification/Notification'

const notification = () => {
  return (
    <View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 20,
        }}>
          <Text style={{
            fontSize:Platform.OS === 'ios' ? 14 : 16,
            padding : 10,
          }}>Cập nhật đơn hàng</Text>
          <Text style={{
            fontSize:Platform.OS === 'ios' ? 14 : 16,
            padding : 10,
            color : 'blue'
          }}>
            Đọc tất cả
          </Text>
        </View>
        <FlatList
        data={[1,2,3,4,5]}
        renderItem={({item}) => <Notification />}
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

export default notification

const styles = StyleSheet.create({})