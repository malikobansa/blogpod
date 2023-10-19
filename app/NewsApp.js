import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const NewsApp = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=5923c983e11d4d01a29b697669f485a4');
        const data = await response.json();
        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the news data", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList 
          data={newsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.newsItem}>
              <Image 
                source={{ uri: item.urlToImage }}
                style={styles.newsImage} 
              />
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
  newsItem: {
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsImage: {
    width:400,
    height: 400,
    resizeMode: 'contain',
  }
});

export default NewsApp;
