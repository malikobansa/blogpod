import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

const ReadNews = () => {
    const news = usePathname().params.news;
    const router = useRouter();
    useEffect(()=>{

    })

    const shareNews = () => {
        Share.share({
            message:news.title+"\nRead more"+ news.description
        })
    }
  return (
    <ScrollView style={{backgroundColor:"#fff", flex:1}}>
        <View style={{marginTop:10, marginBottom:10, display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
        <TouchableOpacity onPress={()=> router.canGoBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  shareNews()}>
        <Ionicons name="share-outline" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <Image source={{uri: news.urlToImage}} style={{width:"100%", height:300, borderRadius:15}}/>
        <Text style={{marginTop:10, fontWeight:"bold", fontSize:22}}>{news.title}</Text>
        <Text style={{marginTop:10, color:"skyblue", fontSize:16}}> {news.source.name} </Text>
        <Text style={{marginTop:10, fontSize:18,color:"gray", lineHeight:20}}></Text>
        
        <TouchableOpacity onPress={()=> WebBrowser.openBrowserAsync(news.url)}>
        <Text style={{marginTop:10, color:"skyblue", fontSize:16, fontWeight:"bold"}}>Read More</Text>
        </TouchableOpacity> 
    </ScrollView>
  )
}

export default ReadNews