import React, {useEffect, useState} from 'react';
import { ScrollView, TouchableOpacity, Image, Dimensions, StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  
  const [like1, setLike1] = useState(0);
  const [isFalse1, setisFalse1] = useState(true);
  const addLike1 = ()=>{
    setLike1(like1 + 1)
  };
  useEffect(() => {
    like1 % 2 === 0 ? setisFalse1(true) : setisFalse1(false)
  },[like1]);

  const [like2, setLike2] = useState(0);
  const [isFalse2, setisFalse2] = useState(true);
  const addLike2 = ()=>{
    setLike2(like2 + 1)
  };
  useEffect(() => {
    like2 % 2 === 0 ? setisFalse2(true) : setisFalse2(false)
  },[like2]);

  const [like3, setLike3] = useState(0);
  const [isFalse3, setisFalse3] = useState(true);
  const addLike3 = ()=>{
    setLike3(like3 + 1)
  };
  useEffect(() => {
    like3 % 2 === 0 ? setisFalse3(true) : setisFalse3(false)
  },[like3]);

  const [like4, setLike4] = useState(0);
  const [isFalse4, setisFalse4] = useState(true);
  const addLike4 = ()=>{
    setLike4(like4 + 1)
  };
  useEffect(() => {
    like4 % 2 === 0 ? setisFalse4(true) : setisFalse4(false)
  },[like4]);

  return (
    <ScrollView style={styles.bg}>

    <View style={styles.container}>

      {/*Near You section*/ }
      <View style={[styles.sections, styles.trending]}>
        <Text style={[styles.sectionTitle, styles.textTitle]}>Upcoming Events</Text>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
         >
           <View style={[styles.trendingTile]}>
          <Image style={styles.trendingImg} source={require("../assets/images/hello-i-m-nik-fUP76lM4FPc-unsplash.jpg")} />
            <View style={styles.trendingContent}>
              <Text style={styles.trendingTitle}>Monthly Sweet Treat Roundup: October Edition</Text>
              <Text style={styles.tileText}>This month's theme is super SPOOKY Pumpkin everything!</Text>
            </View>
            <View style={styles.lastTile}>
              <Button
                color="coral"
                title="Join Today"
              />
            </View>
          </View>
          <View style={[styles.trendingTile]}>
          <Image style={styles.trendingImg} source={require("../assets/images/toni-osmundson-arCQ2Xgt_OE-unsplash.jpg")} />
            <View style={styles.trendingContent}>
              <Text style={styles.trendingTitle}>The Bloody Mary Festival - Fall Edition</Text>
              <Text style={styles.tileText}>the best small-batch craft bottles just for you</Text>
            </View>
            <View style={styles.lastTile}>
              <Button
                color="coral"
                title="Join Today"
              />
            </View>
          </View>
          <View style={[styles.trendingTile]}>
          <Image style={styles.trendingImg} source={require("../assets/images/tabitha-turner-Ns2aJ5OXKds-unsplash.jpg")} />
            <View style={styles.trendingContent}>
              <Text style={styles.trendingTitle}>Cooking @ Home with Leah Koenig: Sweet & Savory Test Kitchen</Text>
              <Text style={styles.tileText}>You don't have to laminate your own dough to make outstanding pastries</Text>
            </View>
            <View style={styles.lastTile}>
              <Button
                color="coral"
                title="Join Today"
              />
            </View>
          </View>
         </ScrollView>
      </View>

      {/*New Recipes section*/ }
      <View style={[styles.sections, styles.recipes]}>
        <Text style={[styles.text, styles.textTitle]}>Trending Recipes</Text>
        <View style={[styles.popTile, styles.tile]}>

          <View style={styles.singleTile}>
            <Image style={styles.image} source={require("../assets/images/dana-devolk-nT5fbuXulQI-unsplash.jpg")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileTitle]}>Super Silly Lemon Bars</Text>
              <Text style={[styles.text, styles.tileText]}>Summer year-round</Text>
            </View>
            <TouchableOpacity 
              style={styles.fave}
              onPress={addLike1}
            >
              <Image 
                style={styles.fave} 
                source={
                  isFalse1
                  ? require("../assets/icons/1/heartOff.png")
                  : require("../assets/icons/1/heartOn.png")} 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.singleTile}>
            <Image style={styles.image} source={require("../assets/images/nadine-primeau-3QhL0a2xC7M-unsplash.jpg")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileTitle]}>Ultimate Maple Snickerdoodles</Text>
              <Text style={[styles.text, styles.tileText]}>Early holidays</Text>
            </View>
            <TouchableOpacity 
              style={styles.fave}
              onPress={addLike2}
            >
              <Image 
                style={styles.fave} 
                source={
                  isFalse2
                  ? require("../assets/icons/2/heartOff.png")
                  : require("../assets/icons/2/heartOn.png")} 
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.singleTile}>
            <Image style={styles.image} source={require("../assets/images/priscilla-du-preez-BpVSPBPX-5M-unsplash.jpg")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileTitle]}>Caramel Apple Ginger</Text>
              <Text style={[styles.text, styles.tileText]}>Sweet and Fresh</Text>
            </View>
            <TouchableOpacity 
              style={styles.fave}
              onPress={addLike3}
            >
              <Image 
                style={styles.fave} 
                source={
                  isFalse3
                  ? require("../assets/icons/3/heartOff.png")
                  : require("../assets/icons/3/heartOn.png")} 
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.lastTile, styles.singleTile]}>
            <Image style={styles.image} source={require("../assets/images/jessica-loaiza-Gh6cYg54KGc-unsplash.jpg")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileTitle]}>Chocolate-Dipped Coconut Macarons</Text>
              <Text style={[styles.text, styles.tileText]}>Gotta love chocolate</Text>
            </View>
            <TouchableOpacity 
              style={styles.fave}
              onPress={addLike4}
            >
              <Image 
                style={styles.fave} 
                source={
                  isFalse4
                  ? require("../assets/icons/4/heartOff.png")
                  : require("../assets/icons/4/heartOn.png")} 
              />
            </TouchableOpacity>
            
          </View>
          <View style={styles.lastTile}>
            <Button
              color="coral"
              title="See More"
            />
          </View>
        </View>
      </View>

    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg:{
    backgroundColor: "#F5F6FA",
  },
  container:{
    flex: 1,
    paddingBottom: 60,
    marginTop: 55,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  sections:{
    marginTop: 25,
  },
  trending:{
    flex: 2,
  },
  recipes:{
    marginTop: 45,
    flex: 3,
    width: Dimensions.get("window").width/1.1,
  },
  trendingTile:{
    marginBottom: 20,
    marginHorizontal: 19,
    borderRadius: 15,
    backgroundColor: "white",
    width: Dimensions.get("window").width/1.1,
    elevation: 5,
    shadowColor: '#b3c2d4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  trendingImg:{
    height: 130,
    width: Dimensions.get("window").width/1.1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  trendingTitle:{
    marginLeft: 15,
  },
  tile:{
    borderRadius: 15,
    backgroundColor: "white",
    width: Dimensions.get("window").width/1.1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  popTile:{
    paddingTop: 10,
  },
  trendingContent:{
    margin: 25,
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0"
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
    marginTop: 15,
  },
  image:{
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  singleTile:{
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingBottom: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0"
  },
  text: {
    fontSize: 15,
  },
  sectionTitle:{
    marginLeft: 20,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
  tileTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
    width: 180,
  },
  tileText:{
    fontSize: 16,
    color: "#9C9C9C"
  },
  fave:{
    marginTop: 15,
    marginRight: 15,
    height: 20,
    width: 20,
  },
  lastTile:{
    marginBottom: 5,
  }
});
