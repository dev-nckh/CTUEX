import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { Link, Tabs,router } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/img/home-fill.png') : require('../../../assets/img/home.png')}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          headerTitle: 'Store',
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: '#BDFC9E', 
              padding: 6,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                source={require('../../../assets/img/store.png')}
                style={{ width: 26, height: 26, tintColor: '#64a2cb' }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />


        <Tabs.Screen
        name="notification"
        options={{
          headerTitle: 'Notification',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/img/bell-fill.png') : require('../../../assets/img/bell-nofill.png')}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }} 
        
      />
        <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../../assets/img/user-fill.png') : require('../../../assets/img/user-nofill.png')}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />

    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});