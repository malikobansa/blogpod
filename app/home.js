import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import FetchNews from './NewsApp';

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);


  const fetchNews = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=5923c983e11d4d01a29b697669f485a4`);
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
      <View style={styles.header}>
        <Text>Explore</Text>

        <FontAwesome name="bell" size={20} color="gray" style={styles.inputIcon}/>
      </View>
      <View style={styles.search}>
      <FontAwesome name="search" size={20} color="#000" style={styles.searchIcon} />
      <TextInput 
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search for news..."
        onSubmitEditing={handleSearch}
        style={styles.input}
      />
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
      <ScrollView horizontal={true} style={styles.view}>
        <TouchableOpacity style={styles.views}>
            <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.views}>
            <Text>Gaming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.views}>
            <Text>Fashion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.views}>
            <Text>Politics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.views}>
            <Text>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.views}>
            <Text>Entertainment</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.fetch}>
        <FetchNews/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 10,
        borderRadius: 4,
      },
      searchIcon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        paddingVertical: 10,
      },
      view: {
        width:100,
        height:100,
      },
      views: {
        
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

export default Home