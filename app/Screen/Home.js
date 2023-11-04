import React, { useState } from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import { View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSLider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';


function Home() {
    const [newsList, setNewList] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        getTopHeadline();
        getNewsByCategory('latest');
    }, [])

    const getNewsByCategory=async(category)=>{
        setLoading(true)
        const result=(await GlobalApi.getByCategory(category)).data;
        setNewList(result.articles)
        setLoading(false)
    }

    const getTopHeadline =async() => {
      const result=(await GlobalApi.getTopHeadline).data;
      setNewList(result.articles)
    }

 return (
   <ScrollView style={styles.container}>
    <View style={styles.notify}>
        <Text style={styles.appName}><Text style={styles.span}>Blog</Text>Pod News</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
    </View>

    {/* Category List */}
    <CategoryTextSlider selectCategory={(category)=> getNewsByCategory(category)}/>


    {loading?<ActivityIndicator style={{marginTop:Dimensions.get("screen").height*0.40}} size={"large"} color={"skyblue"}/> :
    <View>
    {/* TopHeadlineSlider */}
    <TopHeadlineSlider newsList={newsList}/>

    {/* HeadlineList */}
    <HeadlineList newsList={newsList}/>
  </View>    
   }

   </ScrollView>
  )
}

const styles = StyleSheet.create({
    appName: {
        fontSize:25, 
        fontWeight:"bold", 
    },
    span:{
        color:"skyblue"
    },
    container:{
        padding:20
    },
    notify:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
    
})

export default Home