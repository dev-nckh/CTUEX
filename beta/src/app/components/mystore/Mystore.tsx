import { Platform, StyleSheet, Text, View,Image, TouchableOpacity  } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from 'react-native-paper'

const Mystore = () => {

    return (
        <View style={{
            width:'100%',
            height:200,
        }}>
            <LinearGradient
            colors={['#64a2cb', '#4c7fa3']}
            style={{
                width: '100%',
                height: 200,
            }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    paddingLeft: 10,
                    position: 'absolute',
                    top: 60,
                    left: Platform.OS === 'ios' ? 240 : 280,
                }}>
                </View>
            </LinearGradient>
            <View style={{
                backgroundColor: '#fff',
                width: '90%',
                height: Platform.OS === 'android' ? 140 : 140,
                position: 'absolute',
                top: 150,
                borderRadius: 20,
                left:20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    gap:10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                    }}>
                        <View>
                            <Image 
                                source={require('../../../../assets/img/ctu.png')}
                                style={{width: 100, height: 100}}
                                resizeMode='contain'
                            />
                            
                                <View style={{
                                    position: 'absolute',
                                    right: 10,
                                    bottom: 10,
                                    backgroundColor: 'black',
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0.5  // Đặt giá trị opacity từ 0 đến 1
                                }}>
                                    <TouchableOpacity>
                                    <Image 
                                        source={require('../../../../assets/img/camera.png')}
                                        style={{width: 10, height: 10}}
                                        resizeMode='contain'
                                    />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{
                                gap:5
                            }}>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Cửa hàng 1</Text>
                                <Text style={{fontSize: 14, color: 'gray'}}>ctuex.vn/cuahang1</Text>
                            </View>
    
                    </View>                    
                </View>
            </View>
            <View style={{
                backgroundColor: '#f7f8fb',
                width: '90%',
                height: Platform.OS === 'android' ? 70 : 130,
                position: 'absolute',
                top: 300,
                borderRadius: 20,
                left:20,
            }}>
                <View style={{
                    paddingTop:15,
                    paddingLeft:15,
                }}>
                    <Text style={{fontWeight:'bold'}}>Đơn hàng</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    paddingTop:10,
                }}>
                    <View style={{
                        backgroundColor: '#def2ff',
                        height: 70,
                        width: 70,
                        borderRadius: 20,
                    }}>
                        <View style={{
                            height:'100%',
                            flexDirection:'column',
                            alignItems:'center',
                            paddingTop:14,
                        }}>
                            <Text style={{color:'#004aad',fontWeight:'bold',fontSize:20}}>5</Text>
                            <Text style={{fontSize:10}}>Chờ lấy hàng</Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#def2ff',
                        height: 70,
                        width: 70,
                        borderRadius: 20,
                    }}>
                        <View style={{
                            height:'100%',
                            flexDirection:'column',
                            alignItems:'center',
                            paddingTop:14,
                        }}>
                            <Text style={{color:'#004aad',fontWeight:'bold',fontSize:20}}>0</Text>
                            <Text style={{fontSize:10}}>Đơn hủy</Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#def2ff',
                        height: 70,
                        width: 70,
                        borderRadius: 20,
                    }}>
                        <View style={{
                            height:'100%',
                            flexDirection:'column',
                            alignItems:'center',
                            paddingTop:14,
                        }}>
                            <Text style={{color:'#004aad',fontWeight:'bold',fontSize:20}}>0</Text>
                            <Text style={{fontSize:10, textAlign:'center'}}>Trả hàng/ Hoàn tiền</Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#def2ff',
                        height: 70,
                        width: 70,
                        borderRadius: 20,
                    }}>
                        <View style={{
                            height:'100%',
                            flexDirection:'column',
                            alignItems:'center',
                            paddingTop:14,
                        }}>
                            <Text style={{color:'#004aad',fontWeight:'bold',fontSize:20}}>5</Text>
                            <Text style={{fontSize:10,textAlign:'center'}}>Phản hồi, đánh giá</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
            backgroundColor: '#f7f8fb',
            width: '90%',
            height: Platform.OS === 'android' ? 80 : 80,
            position: 'absolute',
            top: 440,
            borderRadius: 20,
            left:20,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingHorizontal: 10,
                paddingVertical: 5,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 7,
                    height: 70,
                    width: 70,
                }}>
                    <Image 
                        source={require('../../../../assets/img/boxes.png')}
                        style={{width: 30, height: 30}}
                        resizeMode='contain'
                    />
                    <Text style={{fontSize: 12,textAlign:'center'}}>Sản phẩm</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 7,
                    padding: 5,
                    height: 70,
                    width: 70,
                }}>
                    <Image 
                        source={require('../../../../assets/img/money.png')}
                        style={{width: 30, height: 30}}
                        resizeMode='contain'
                    />
                    <Text style={{fontSize: 12}}>Tài chính</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 7,
                    padding: 5,
                    height: 70,
                    width: 70,
                }}>
                    <Image 
                        source={require('../../../../assets/img/support.png')}
                        style={{width: 30, height: 30}}
                        resizeMode='contain'
                    />
                    <Text style={{fontSize: 12}}>Hỗ trợ</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 7,
                    padding: 5,
                    height: 70,
                    width: 70,
                }}>
                    <Image 
                        source={require('../../../../assets/img/menuStore.png')}
                        style={{width: 30, height: 30}}
                        resizeMode='contain'
                    />
                    <Text style={{fontSize: 12}}>Khác</Text>
                </View>
            </View>
        </View>
        </View>
      )
}

export default Mystore