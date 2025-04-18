import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { router, useRouter } from "expo-router";
import { API_URL } from "../../constants/api";

export default function Profile() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const router = useRouter();
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/books/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to fetch books");

      setBooks(uniqueBooks);
    } catch (error) {
      console.log("Error fetching data:", error);
      Alert.alert(
        "Error",
        "Failed to load profile data. Pull down to refresh."
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View>
      <Text>profile tab</Text>
    </View>
  );
}
