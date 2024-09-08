import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { Image, Pressable, View,Text } from 'react-native';

const StackLayout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="CartScreen"
        options={{ 
          title: 'Giỏ hàng',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 23,
          },
          headerLeft: () => {
            const router = useRouter();
            return (
              <Pressable onPress={() => router.replace('/(tabs)')}>
                <Image
                  source={require('../../../assets/img/arrow.png')}
                  style={{ width: 20, height: 20, marginLeft: 10 }}
                />
              </Pressable>
            );
          },
          headerRight: () => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Sửa</Text>
                <Image
                  source={require('../../../assets/img/chat-blue.png')}
                  style={{ width: 23, height: 23, marginLeft: 10, position: 'relative' }}
                />
                <View style={{ 
                  position: 'absolute',
                  backgroundColor: 'rgba(252,129,65,1)',
                  minWidth: 15,
                  height: 15,
                  borderRadius: 8.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: -5,
                  left: 68,
                  paddingHorizontal: 4,
                }}>

                  </View>
              </View>
            );
          },
        }}
      />
    </Stack>
  );
}

export default StackLayout;