import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Product from "../Product";
import { useRouter } from "expo-router";

const ListProductSug = () => {
  const router = useRouter();

  const handlePressProduct = () => {
    router.push("/(stacks)/ProductSuggestMore");
  };
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }: { item: number }) => <Product />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        initialNumToRender={3}
        maxToRenderPerBatch={1}
        windowSize={5}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          // Load more items when the end is reached
          // You can implement your logic to fetch more data here
        }}
      />
      <TouchableOpacity
        style={{
          alignSelf: "center",
          marginTop: 20,
          padding: 10,
          backgroundColor: "#2980b8",
          borderRadius: 5,
        }}
        onPress={handlePressProduct}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Xem thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListProductSug;
