import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';

const Index = () => {
  const [loading, setLoading] = useState(false);

  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/news.png')} style={styles.image}/>
      <Text style={styles.text}>A rich-text editor for crafting your blog posts, with the ability to embed images, videos, and other media.</Text>
      <Text style={styles.text}>Browse the latest posts from all users in a seamless feed.</Text>
      <Text style={styles.text}>Save drafts and preview them before publishing.</Text>
      <Text style={styles.text}>Option to categorize and tag your post for easy retrieval and to aid discoverability.</Text>
      
      <View style={styles.btn}>
         <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
           {loading && <ActivityIndicator size="small" color="blue"/>}
            <Text style={styles.ButtonText}>Log In</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={() => router.push('/signup')}>
           {loading && <ActivityIndicator size="small" color="blue"/>}
            <Text style={styles.ButtonText}>Sign Up</Text>
         </TouchableOpacity>
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    flexDirection:'column',
    marginLeft:50,
   },
   image: {
    width:300,
    height:300,
    textAlign: "center",
   },
   text:{
    textAlign:"center",
    width:300,
    fontSize:20,
   },
   loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft:20,
    width: "80%",
  },
  button: {
    width:100,
    textAlign:"center",
    flex: 1,
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 20,
  },
  ButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  }
})

export default Index