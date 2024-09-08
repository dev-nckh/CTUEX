import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderProfile from '../components/profile/HeaderProfile'

const profile = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#fff'
  }
})