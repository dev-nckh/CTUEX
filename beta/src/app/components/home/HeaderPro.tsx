import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';

const HeaderPro = () => {
  const [first, setFirst] = useState(true);
  const { width } = Dimensions.get('window');  // You might want to use `width` if needed

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: first ? '#aecee3' : '#2980b8' }
          ]}
          onPress={() => setFirst(true)}
        >
          <Text style={styles.buttonText}>Mua sản phẩm mới</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: first ? '#2980b8' : '#aecee3' }
          ]}
          onPress={() => setFirst(false)}
        >
          <Text style={styles.buttonText}>Mua sản phẩm cũ</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderPro;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
