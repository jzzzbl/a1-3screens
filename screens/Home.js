import React, {useState} from 'react';
import { ScrollView, TouchableOpacity, Image, Dimensions, StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  var today = new Date();
  var hours = today.getHours();
  var isDay = true;
  //const [isDay, setisDay] = useState(true);
  var textValue = "Good morning, Sally";

  if( hours > 12){
    isDay = false;
    textValue = "Good afternoon, Sally";
  }
  else if( hours < 12){
    isDay = true;
    textValue = "Good morning, Sally";
  }
  return (
    <ScrollView style={styles.bg}>

    <View style={styles.container}>

      {/*Near You section*/ }
      <View style={[ styles.trending]}>
        <View style={[styles.greetingContain]}>
          <Image 
            style={styles.greetingImage} 
            source={
              isDay
              ? require("../assets/icons/sun.png")
              : require("../assets/icons/moon.png")
            } />
          <Text style={[styles.greeting]} >{textValue}</Text>
        </View>
        <Text style={[styles.text, styles.eventContainTitle]}>Current Events</Text>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
         >
          <View style={[styles.myEvents, styles.firstEvent]}>
            <Image style={styles.eventImg} source={require("../assets/images/food-photographer-jennifer-pallian-dcPNZeSY3yk-unsplash.jpg")} />
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>Digital Chocolate Festival '20</Text>
              <Text style={styles.tileText}>Celebrate Cacao and Eat Better Sweets this Fall!</Text>
            </View>
            <View style={styles.lastTile}>
              <Button
                title="Continue Submission"
                color="coral"
              />
            </View>
          </View>

          <View style={[styles.myEvents]}>
            <Image style={styles.eventImg} source={require("../assets/images/nathan-dumlao-zUNs99PGDg0-unsplash.jpg")} />
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>The Fundamentals of Espresso</Text>
              <Text style={styles.tileText}>3 Easy recipes, right at Home, all Espresso</Text>
            </View>
            <View style={styles.lastTile}>
             <Button
                title="Continue Submission"
                color="coral"
              />
            </View>
          </View>

          <View style={[styles.myEvents, styles.lastEvent]}>
            <Image style={styles.eventImg} source={require("../assets/images/howtogym-S9NchuPb79I-unsplash.jpg")} />
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>Create your own Event</Text>
              <Text style={styles.tileText}>Set the stage for your very own private or public challenge!</Text>
            </View>
            <View style={styles.lastTile}>
              <Button
                title="New Event"
                color="coral"
              />
            </View>
          </View>

        </ScrollView>
        
      </View>

      {/*New Recipes section*/ }
      <View style={[styles.sections, styles.recipes]}>
        <Text style={[styles.text, styles.textTitle]}>Saved Recipes</Text>
        <View style={[styles.popTile, styles.tile]}>

          <View style={styles.singleTile}>
            <Image style={styles.image} source={require("../assets/images/clarissa-carbungco-hcqsCB2Gt5c-unsplash.jpg")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileTitle]}>Fluffy Pumpkin Rolls</Text>
              <Text style={[styles.text, styles.tileText]}>Just in time for Fall</Text>
            </View>
            <Image style={styles.fave} source={require("../assets/icons/1/heartOn.png")}/>
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
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  sections:{
    marginTop: 25,
    width: Dimensions.get("window").width/1.1,
  },
  trending:{
    flex: 3,
    
  },
  recipes:{
    marginTop: 45,
    flex: 2,
  },
 
  myEvents:{
    marginBottom: 20,
    marginHorizontal: 33.5,
    borderRadius: 15,
    backgroundColor: "white",
    width: Dimensions.get("window").width/1.2,
    elevation: 5,
    shadowColor: '#b3c2d4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  eventImg:{
    height: 230,
    width: Dimensions.get("window").width/1.2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  eventContent:{
    margin: 25,
    marginTop: 15,
    marginBottom: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  eventTitle:{
    fontSize: 22,
    marginBottom: 5,
  },
  tile:{
    borderRadius: 15,
    backgroundColor: "white",
    width: Dimensions.get("window").width/1.1,
    elevation: 5,
    shadowColor: '#b3c2d4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  popTile:{
    paddingTop: 10,
  },

  greetingContain:{
    marginHorizontal: 5,
    marginBottom: 30,
    marginTop: 40,
    width: Dimensions.get("window").width/1.1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  greeting: {
    fontSize: 32,
    fontWeight: "600",
    paddingTop: 10,
    marginRight: 45,
    width: 250,
  },
  greetingImage:{

    height: 90,
    width: 90,
  },

  image:{
    height: 80,
    width: 80,
    borderRadius: 5
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
  eventContainTitle:{
    fontSize: 24,
    fontWeight: "500",
    marginHorizontal: 20,
    marginBottom: 20,
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
  },
  fave:{
    marginTop: 15,
    marginRight: 15,
    height: 20,
    width: 20,
  },
});