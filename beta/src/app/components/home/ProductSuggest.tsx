import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListProductSug from './ListProductSug'

const ProductSuggest = () => {
  return (
    <View style={styles.container}>
      <View style={{
        width: 230,
        height: 40,
        backgroundColor: '#2980b8',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
      }}>
        <Text style={{
            color: '#fff',
            fontSize: 13,
            fontWeight: 'bold',
        }}>Sản phẩm bạn có thể quan tâm</Text>
      </View>
        <ListProductSug/>
    </View>
  )
}

export default ProductSuggest

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60,

    }
})