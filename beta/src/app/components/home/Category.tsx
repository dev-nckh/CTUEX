import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor:'#def2ff',
        width: '100%',
        height: 80,
        position:'relative',
      }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap:20,
            position:'absolute',
            top:5,
            left:0,
            right:0,
            bottom:0,
            marginHorizontal: 'auto'
        }}>
            <View style={{
                gap:20
            }}>
                <View style={{
                    width:160,
                    height:50,
                    backgroundColor:'#fff',
                    borderColor:'#333',
                    borderWidth: 1,
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:10
                }}>
                    <Image 
                        source={require('../../../../assets/img/open-book.png')}
                        style={{width: 24, height: 24}}
                        resizeMode='contain'
                    />
                    <Text style={{
                        color:'#2980b8',
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}>Sách, tài liệu</Text>
                </View>
                <View style={{
                    width:160,
                    height:50,
                    backgroundColor:'#fff',
                    borderColor:'#333',
                    borderWidth: 1,
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:10
                }}>
                    <Image 
                        source={require('../../../../assets/img/dinner-table.png')}
                        style={{width: 24, height: 24}}
                        resizeMode='contain'
                    />
                    <Text style={{
                        color:'#2980b8',
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}>Đồ nội thất</Text>
                </View>
            </View>
            <View style={{
                gap:20
            }}>
                <View style={{
                    width:160,
                    height:50,
                    backgroundColor:'#fff',
                    borderColor:'#333',
                    borderWidth: 1,
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:10
                }}>
                    <Image 
                        source={require('../../../../assets/img/shirt.png')}
                        style={{width: 24, height: 24}}
                        resizeMode='contain'
                    />
                    <Text style={{
                        color:'#2980b8',
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}>Quần áo</Text>
                </View>
                <View style={{
                    width:160,
                    height:50,
                    backgroundColor:'#fff',
                    borderColor:'#333',
                    borderWidth: 1,
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:5,
                }}>
                    <Image 
                        source={require('../../../../assets/img/box.png')}
                        style={{width: 24, height: 24}}
                        resizeMode='contain'
                    />
                    <Text style={{
                        color:'#2980b8',
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}>Đồ dùng cá nhân</Text>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
        paddingTop:50
    }
})