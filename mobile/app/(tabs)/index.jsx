import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useEffect } from "react";

export default function Home() {
  const { token } = useAuthStore();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchBooks = async (pageNum = 1, refresh = false) => {};
  useEffect(() => {
    fetchBooks();
  }, []);

  const handleLoadMore = async () => {};
  return (
    <View>
      <Text>home tab</Text>
    </View>
  );
}
