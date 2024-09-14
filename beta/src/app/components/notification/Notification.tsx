import {
  StyleSheet,
  Text,
  View,
  Platform,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FullWindowOverlay } from "react-native-screens";

const notification = () => {
  const {width,height} = Dimensions.get('window');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View >
      <View style={{
        backgroundColor:'#aecee3',
        alignItems:'center',
        flexDirection:'row',
        padding: 7,
      }}>
        <Image 
            source={require('../../../../assets/img/pro.png')}
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderColor: '#e0e0e0',
              borderRadius: 12,
            }}
            resizeMode='cover'
        />
      <View style={{
        paddingLeft : 20,
      }}>
        <Text style={{
          fontSize:Platform.OS === 'ios' ? 14 : 16,
          fontWeight : 'bold'
        }}>
          Đang vận chuyển
        </Text>
        <Text style={{
          maxWidth: 310,
          paddingTop : 5,
        }}>
          Đơn hàng với mã xxxxxxxx với mã vận đơn yyyyyyyyy đang trong quá trình vận chuyển
        </Text>
        <Text style={{
          paddingTop : 5,
          fontSize:Platform.OS === 'ios' ? 10 : 12,
        }}>
          14/09/2024 17:45
        </Text>
      </View>
      </View>
      <View style={styles.separator} />
    </View >
  );
};
const styles = StyleSheet.create({  
  separator: {  
    marginVertical: 0.2,
  },  
});  

export default notification;
