import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'


const CategoryTextSlider = ({selectCategory}) => {

    const [ active, setActive ] = useState(1)
    const categoryList=[
        {
            id: 1,
            name:'Latest',
        },
        {
            id:2,
            name:'World',
        },
        {
            id:3,
            name:"Business",
        },
        {
            id:4,
            name:"Sports"
        },
        {
            id:5,
            name:"Life"
        },
        {
            id:6,
            name:"Movies"
        },
    ]

    const onCategotyClick = (id) =>{
        setActive(id)
    } 
  return (
    <View style={styles.name}> 
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>(
            <TouchableOpacity onPress={() =>{onCategotyClick(item.id); selectCategory(item.name)}}>
                <Text style={
                  item.id == active ? styles.selectItem :  styles.item}>{item.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
   item:{
    marginRight:15,
    fontSize:20,
    fontWeight:"bold",
    width:100,
    height:50,
    backgroundColor:"#fff",
    textAlign:"center",
    borderRadius:20,
    borderWidth:1,
    paddingTop:10,
    borderColor:"skyblue"
   },
   selectItem:{
     color:"skyblue",
    marginRight:15,
    fontSize:20,
    fontWeight:"bold",
    width:100,
    height:50,
    backgroundColor:"#fff",
    textAlign:"center",
    borderRadius:20,
    borderWidth:1,
    paddingTop:10,
    borderColor:"skyblue"
   },
   name:{
     marginTop:10,
   },
})

export default CategoryTextSlider