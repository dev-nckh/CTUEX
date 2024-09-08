import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const Home = () => {
  return (
    <Redirect href="/(tabs)" />
  )
}

export default Home

const styles = StyleSheet.create({})