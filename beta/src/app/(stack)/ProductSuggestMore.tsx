import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import React from "react";
import Product from "../components/Product";

interface ProductItem {
  id: number;
}

const ProductSuggest: React.FC = () => {
  const products: ProductItem[] = Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
  }));

  const windowWidth = Dimensions.get("window").width;
  const margin = 20; // Khoảng cách giữa các cột và từ cột đến lề
  const itemWidth = (windowWidth - 3 * margin) / 2; // 3 margin: 2 cho các khoảng cách giữa các cột và 1 cho lề

  const renderProduct = ({ item }: { item: ProductItem }) => (
    <View style={[styles.productContainer, { width: itemWidth }]}>
      <Product />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.columnContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  columnContainer: {
    paddingVertical: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  productContainer: {
    marginHorizontal: "4%", // Khoảng cách giữa các cột
    marginBottom: "5%", // Khoảng cách dưới mỗi sản phẩm
  },
});

export default ProductSuggest;
