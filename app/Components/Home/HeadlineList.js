import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'


const HeadlineList = ({newsList}) => {
  return (
    <View>
      <FlatList
      data={newsList}
      renderItem={({item}) => {
        <View>
        <View style={{height:2,color:"lightgray", marginTop:10}}></View>
        <TouchableOpacity style={{marginTop:15, display:"flex", flexDirection:"row"}} onPress={() => router.push("/readNews",{news:item})}>
            <Image source={{uri:item.urlToImage}}
            style={{width:130,height:130,borderRadius:10}}
            />
            <View style={{marginRight:130, marginLeft:10}}>
             <Text numberOfLines={4} style={{fontSize:18, fontWeight:"bold"}}>{item.title}</Text>
             <Text style={{color:"skyblue",marginTop:6}}>{item?.source.name}</Text>
            </View>

        </TouchableOpacity>
        <View style={{height:2,color:"lightgray", marginTop:10}}></View>
        </View>
      }}
      />
    </View>
  )
}

export default HeadlineList