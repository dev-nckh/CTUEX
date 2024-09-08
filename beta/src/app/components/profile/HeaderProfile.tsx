import { Platform, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

// Định nghĩa hàm formatNumber

  
const HeaderProfile = () => {
    const formatNumber = (number: number): string => {
        if (number >= 1000) {
          // Chia số cho 1000 để chuyển thành dạng có k
          const formattedNumber = (number / 1000).toFixed(1);
          
          // Chuyển đổi chuỗi thành số để sử dụng Math.floor
          const roundedNumber = parseFloat(formattedNumber);
          
          // Kiểm tra nếu số sau khi làm tròn có dạng .0 thì chỉ giữ lại phần nguyên
          return formattedNumber.endsWith('.0') ? `${Math.floor(roundedNumber)}k` : `${formattedNumber}k`;
        }
        
        // Nếu số nhỏ hơn 1000 thì trả về số gốc
        return number.toString();
      };
      
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
                <View style={{
                    borderRadius: 100,
                    backgroundColor: 'rgba(111,111,111,0.84)',
                    padding: 5,
                    position: 'relative',
                }}>
                    <Image 
                        source={require('../../../../assets/img/cart.png')}
                        style={{width: 22, height: 22}}
                        resizeMode='contain'
                    />
                    <View style={{
                        position: 'absolute',
                        backgroundColor: 'rgba(252,129,65,1)',
                        minWidth: 17,
                        height: 17,
                        borderRadius: 8.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: -2,
                        right: -5,
                        paddingHorizontal: 4,
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 10,
                            color: 'white',
                            fontWeight: 'light'
                        }}>10</Text>
                    </View>
                </View>
                <View style={{
                    borderRadius: 100,
                    backgroundColor: 'rgba(111,111,111,0.84))',
                    padding: 5,
                    position: 'relative',
                }}>
                    <Image 
                        source={require('../../../../assets/img/chat.png')}
                        style={{width: 22, height: 22}}
                        resizeMode='contain'
                    />
                    <View style={{
                        position: 'absolute',
                        backgroundColor: 'rgba(252,129,65,1)',
                        minWidth: 13,
                        height: 13,
                        borderRadius: 8.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 2,
                        right: 1,
                        paddingHorizontal: 4,
                    }}>
                    </View>
                </View>
                <View style={{
                    borderRadius: 100,
                    backgroundColor: 'rgba(111,111,111,0.84)',
                    padding: 5,
                }}>
                    <Image 
                        source={require('../../../../assets/img/menu.png')}
                        style={{width: 24, height: 24}}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </LinearGradient>
        <View style={{
            backgroundColor: '#fff',
            width: '90%',
            height: Platform.OS === 'android' ? 200 : 200,
            position: 'absolute',
            top: 150,
            borderRadius: 20,
            left:20,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingHorizontal: 10,
                paddingTop: 10,
                paddingBottom: 10,
                gap:10
            }}>
                <Image 
                    source={require('../../../../assets/img/ctu.png')}
                    style={{width: 100, height: 100}}
                    resizeMode='contain'
                />

                    <View style={{
                        gap:5
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>CTUEX</Text>
                        <Text style={{fontSize: 14, color: 'gray'}}>ctuex.vn</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 15,
                        marginLeft:Platform.OS === 'ios' ? 10 : 40,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                        }}>
                            <Image 
                                source={require('../../../../assets/img/log-out.png')}
                                style={{width: 15, height: 15}}
                                resizeMode='contain'
                            />
                            <Text>{formatNumber(200)}</Text>
                        </View>
                        <View style={{
                            width: 1,
                            height: 20,
                            backgroundColor: '#E0E0E0',
                            // marginHorizontal: 10,
                        }} />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                        }}>
                            <Image 
                                source={require('../../../../assets/img/log-in.png')}
                                style={{width: 15, height: 15}}
                                resizeMode='contain'
                            />
                            <Text>{formatNumber(1234)}</Text>
                        </View>

                    </View>

                
            </View>
            <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                            justifyContent: 'center',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                height: 50,
                                width: 100,
                                borderRadius: 17,
                                borderWidth: 1,
                                borderColor: 'rgba(238,238,238,1)',
                                justifyContent: 'center',
                                paddingHorizontal: 10,
                            }}>
                                <Image 
                                    source={require('../../../../assets/img/box1.png')}
                                    style={{width: 20, height: 20}}
                                    resizeMode='contain'
                                />
                                <Text>Đơn mua</Text>

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                height: 50,
                                width: 100,
                                borderRadius: 17,
                                borderWidth: 1,
                                borderColor: 'rgba(238,238,238,1)',
                                justifyContent: 'center',
                                paddingHorizontal: 10,
                            }}>
                                <Image 
                                    source={require('../../../../assets/img/history.png')}
                                    style={{width: 20, height: 20}}
                                    resizeMode='contain'
                                />
                                <Text>Lịch sử</Text>

                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                height: 50,
                                width: 50,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: 'rgba(238,238,238,1)',
                                justifyContent: 'center',
                                paddingHorizontal: 10,
                            }}>
                                <Image 
                                    source={require('../../../../assets/img/ellipsis.png')}
                                    style={{width: 20, height: 20}}
                                    resizeMode='contain'
                                />
                            

                            </View>
                        </View>
            </View>
        </View>
        <View style={{
            backgroundColor: '#f7f8fb',
            width: '90%',
            height: Platform.OS === 'android' ? 70 : 70,
            position: 'absolute',
            top: 360,
            borderRadius: 20,
            left:20,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 5,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 7,
                    padding: 5,
                }}>
                    <Image 
                        source={require('../../../../assets/img/file.png')}
                        style={{width: 20, height: 20}}
                        resizeMode='contain'
                    />
                    <Text style={{fontSize: 12}}>Chờ xác nhận</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 7,
                    padding: 5,
                }}>
                    <Image 
                        source={require('../../../../assets/img/storage-box.png')}
                        style={{width: 20, height: 20}}
                        resizeMode='contain'
                    />
                    <Text style={{fontSize: 12}}>Chờ lấy hàng</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 7,
                    padding: 5,
                }}>
                    <Image 
                        source={require('../../../../assets/img/truck.png')}
                        style={{width: 20, height: 20}}
                        resizeMode='contain'
                    />
                    <Text style={{fontSize: 12}}>Đang giao</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 7,
                    padding: 5,
                    position: 'relative',
                }}>
                    <Image 
                        source={require('../../../../assets/img/star.png')}
                        style={{width: 20, height: 20}}
                        resizeMode='contain'
                    />
                    <Text style={{fontSize: 12}}>Đánh giá</Text>
                </View>
                <View style={{
                    position: 'absolute',
                    right: 19,
                    top: 4,
                    backgroundColor: 'rgba(252,129,65,1)',
                    minWidth: 17,
                    height: 17,
                    borderRadius: 8.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{fontSize: 10, color: 'white'}}>3</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default HeaderProfile

const styles = StyleSheet.create({})