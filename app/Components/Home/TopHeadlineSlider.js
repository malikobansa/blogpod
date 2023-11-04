import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity   } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import { useRouter } from 'expo-router'

const TopHeadlineSlider = ({newsList}) => {
  const router = useRouter();

  return (
    <View style={{marginTop:15}}>
      <FlatList
      data={newsList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity style={{width:Dimensions.get('screen').width*0.84, marginRight:15}} onPress={() => router.push("/readNews",{news:item})}>
          <Image source={{uri:item.urlToImage}}
          style={styles.image}/>
          <Text numberOfLines={3}
          style={{marginTop:10, fontSize:23, fontWeight:"bold"}}>{item.title}</Text>
          <Text style={{marginTop:5,color:"blue"}}>{item?.source?.name}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    height:Dimensions.get('screen').width*0.77,
    borderRadius:10,
  }
})

export default TopHeadlineSlider