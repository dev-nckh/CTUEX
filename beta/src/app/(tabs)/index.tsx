import { Platform, StyleSheet, Text, View, SafeAreaView,Image,ScrollView } from 'react-native'
import React from 'react'
import HeaderHome from '../components/home/HeaderHome'
import HeaderPro from '../components/home/HeaderPro'
import Category from '../components/home/Category'
import ProductSuggest from '../components/home/ProductSuggest'

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView         
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 200
        }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderHome />
        <HeaderPro />
        <Category />
        <ProductSuggest />
        <ProductSuggest />
        <ProductSuggest />
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white',
    paddingTop: Platform.OS === 'android' ? 45 : 0,
  },
  scroll:{
    
  }
})