import React from "react";
import { ScrollView, TouchableOpacity, Image, Dimensions, StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.bg}>

    <View style={styles.container}>

      {/*Near You section*/ }
      <View style={[styles.sections, styles.trending]}>
        <Text style={[styles.text, styles.textTitle]}>Trending Now</Text>
        <View style={[styles.tile, styles.trendingTile]}>
          <Image style={styles.trendingImg} source={require("../assets/images/hello-i-m-nik-fUP76lM4FPc-unsplash.jpg")} />
          <View style={styles.trendingContent}>
            <Text style={styles.trendingTitle}>Monthly Sweet Treat Roundup</Text>
            <Text style={styles.tileText}>October's SPOOKY theme is Pumpkin!</Text>
          </View>
          <View style={styles.lastTile}>
            <Button
              title="Join Today"
            />
          </View>
        </View>
      </View>

      {/*New Recipes section*/ }
      <View style={[styles.sections, styles.recipes]}>
        <Text style={[styles.text, styles.textTitle]}>Popular Recipes</Text>
        <View style={[styles.popTile, styles.tile]}>

          <View style={styles.singleTile}>
            <Image style={styles.image} source={require("../assets/images/dana-devolk-nT5fbuXulQI-unsplash.jpg")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileTitle]}>Super Silly Lemon Bars</Text>
              <Text style={[styles.text, styles.tileText]}>Summer year-round</Text>
            </View>
            <TouchableOpacity style={styles.fave}>
            <Image style={styles.fave} source={require("../assets/images/heartOff.png")} />
            </TouchableOpacity>
          </View>

          <View style={styles.singleTile}>
            <Image style={styles.image} source={require("../assets/images/nadine-primeau-3QhL0a2xC7M-unsplash.jpg")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileTitle]}>Ultimate Maple Snickerdoodles</Text>
              <Text style={[styles.text, styles.tileText]}>Early holidays</Text>
            </View>
            <TouchableOpacity style={styles.fave}>
            <Image style={styles.fave} source={require("../assets/images/heartOff.png")} />
            </TouchableOpacity>
            
          </View>
          <View style={[styles.lastTile, styles.singleTile]}>
            <Image style={styles.image} source={require("../assets/images/jessica-loaiza-Gh6cYg54KGc-unsplash.jpg")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileTitle]}>Chocolate-Dipped Coconut Macarons</Text>
              <Text style={[styles.text, styles.tileText]}>Gotta love chocolate</Text>
            </View>
            <TouchableOpacity style={styles.fave}>
            <Image style={styles.fave} source={require("../assets/images/heartOff.png")} />
            </TouchableOpacity>
            
          </View>
          <View style={styles.lastTile}>
            <Button
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
    backgroundColor: "whitesmoke",
  },
  container:{
    flex: 1,
    paddingBottom: 80,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  sections:{
    marginTop: 25,
    width: Dimensions.get("window").width/1.1,
  },
  trending:{
    flex: 2,
    
  },
  recipes:{
    marginTop: 45,
    flex: 3,
  },
  trendingImg:{
    height: 130,
    width: Dimensions.get("window").width/1.1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
  textTitle: {
    fontSize: 20,
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
