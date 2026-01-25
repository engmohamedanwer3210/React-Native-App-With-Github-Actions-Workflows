import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import productsData from '../data/products.json';

// products component

const Products = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.productsList}
        data={productsData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Text>{item.inStock ? 'In Stock' : 'Out of Stock'}</Text>
          </View>
        )}
        testID="productsList"
      />
      <TouchableOpacity testID="btn" onPress={() => {}}>
        <Text>Press me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productsList: {
    width: '100%',
  },
  productContainer: {
    flex: 1,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
