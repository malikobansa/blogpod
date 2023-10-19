import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';

const NewsApp = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchNews = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=YOUR_API_KEY`);
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      console.error("There was an error fetching the news data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchNews(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for news..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList 
          data={newsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.newsItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  newsItem: {
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default NewsApp;
