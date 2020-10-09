import React, {useRef, useEffect, useState, useCallback}  from "react";
import {SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions, StyleSheet, Text, View, Button } from "react-native";
import {ReanimatedArcBase} from '@callstack/reanimated-arc';  
import Reanimated, {Easing} from 'react-native-reanimated';

export default function Home({ navigation }) {

  const arcAngle = useRef(new Reanimated.Value(0));
  const [text, setText] = useState('0%');

  const randomizeProgress = useCallback(() => {
    Reanimated.timing(arcAngle.current, {
      toValue: 0.73 * 240,
      easing: Easing.inOut(Easing.quad),
      duration: 1000,
    }).start();
  }, []);

  useEffect(() => {
    randomizeProgress();
    return () => arcAngle.current;
  }, [arcAngle]);

  return (
    <ScrollView style={styles.bg}>

    <View style={styles.container}>
    

      {/*New Recipes section*/ }
      <View style={[styles.sections, styles.recipes]}>
        <View style={[styles.popTile, styles.tile]}>
        <Text style={[styles.text, styles.eventContainTitle]}>My Account</Text>

        <View style={styles.firstTile}>
            <SafeAreaView style={styles.arcContainer}>
            <Reanimated.Code
                exec={Reanimated.call([arcAngle.current], ([value]) => {
                  setText(`${Math.round((value / 240) * 100)}%`);
                })}
              />
              <ReanimatedArcBase
                color="#F0F0F0"
                diameter={200}
                width={8}
                arcSweepAngle={240}
                lineCap="round"
                rotation={240}
                style={styles.arcAbsolute}
              />
              <ReanimatedArcBase
                color="coral"
                diameter={200}
                width={10}
                arcSweepAngle={arcAngle.current}
                lineCap="round"
                rotation={240}
                style={styles.arcAbsolute}
              />
              <Text style={styles.arcText}>{text}</Text>
            </SafeAreaView>
            <View style={styles.topContent}>
              <Text style={[styles.leveltext]}>You've reached level 7!</Text>
              <Text style={[styles.text, styles.tileText]}>you need 620 more points to reach level 8</Text>
            </View>
          </View>
          <View style={styles.button}>
          </View>

          <View style={styles.singleTile}>
            <Image style={styles.image} source={require("../assets/icons/rolling-pin.png")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileText]}>Technique</Text>
              <Text style={[styles.text, styles.tileTitle]}>1,250 Points</Text>
              </View>
            <TouchableOpacity style={styles.fave}>
            <Image style={styles.fave} />
            </TouchableOpacity>
          </View>

          <View style={styles.singleTile}>
            <Image style={styles.image} source={require("../assets/icons/wedding-cake.png")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileText]}>Display</Text>
              <Text style={[styles.text, styles.tileTitle]}>730 Points</Text>
            </View>
            <TouchableOpacity style={styles.fave}>
              <Image style={styles.fave} />
            </TouchableOpacity>
          </View>

          <View style={styles.singleTile}>
            <Image style={styles.image} source={require("../assets/icons/whisk.png")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileText]}>Flavour</Text>
              <Text style={[styles.text, styles.tileTitle]}>350 Points</Text>
            </View>
            <TouchableOpacity style={styles.fave}>
              <Image style={styles.fave} />
            </TouchableOpacity>
          </View>

          <View style={styles.lastTile}>
            <Image style={styles.image} source={require("../assets/icons/gingerbread.png")} />
            <View style={styles.content}>
              <Text style={[styles.text, styles.tileText]}>Creativity</Text>
              <Text style={[styles.text, styles.tileTitle]}>890 Points</Text>
            </View>
            <TouchableOpacity style={styles.fave}>
              <Image style={styles.fave} />
            </TouchableOpacity>
            
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
    paddingTop: 60,
  },
  arcContainer: {
    marginTop: 25,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 160,
  },
  arcAbsolute: {
    position: 'absolute',
  },
  arcText: {
    transform: [{translateY: -5}],
    fontSize: 40,
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
  recipes:{
    flex: 3,
  },
  firstTile:{
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    margin:"auto",
  },
  leveltext:{
    color: "coral",
    fontSize: 25,
    fontWeight: "500",
  },
  imagePFP:{
    height: 130,
    width: 130,
    margin: 10,
    borderRadius: 100,
  },
  topContent:{
    marginHorizontal: 4,
    width: 330,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 25,
    margin:"auto",
    borderBottomWidth: 2,
    borderBottomColor: "#F0F0F0",
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
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0"
  },
  eventContainTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 5,
    marginTop: 20,
    textAlign: "center"
  },
  image:{
    height: 35,
    width: 35,
    marginVertical: 5,
    marginRight: 20,
    marginLeft: 25,
    borderRadius: 5,
  },
  singleTile:{
    marginHorizontal: 50,
    paddingTop: 20,
    paddingBottom: 15,
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
    width: 140,
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
    marginHorizontal: 50,
    paddingTop: 20,
    paddingBottom: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
  }
});
