
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import API from "../api/api";

export default function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const toggleFavorite = async () => {
    await API.post(`/products/favorite/${id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        {/* Product Image */}
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Product Info */}
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>₹{product.price}</Text>

        {/* Favorite Button */}
        <TouchableOpacity style={styles.button} onPress={toggleFavorite}>
          <Text style={styles.buttonText}>❤️ Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#555",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#111",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 15,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
