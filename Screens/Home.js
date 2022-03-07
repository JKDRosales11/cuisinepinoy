import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, StatusBar} from 'react-native';

export default class Home extends Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
            source={require("../assets/recipes/home.png")}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              opacity: 1,
              flex:1,
              justifyContent:'flex-end'
            }}>
          </ImageBackground>
        <View style={{
          width: 220,
          height: 500,
          position: 'absolute',
          bottom: 0}}>
        <Image
        style={{ width: 200, height: 100 , marginLeft: 10}}
        source={require('../assets/recipes/logo.png')}
        />      
          <Text style={{ fontSize: 48, color:"white" }}>CookBook</Text>
          <Text style={{ fontSize: 15, color:"white" }}>"Langhap Sarap Kahit nasa App"</Text>
          
        </View>
        <View  style={{
          width: 300,
          height: 180,
          position: 'absolute',
          flex: 1,
          alignItems: "center",
          flexDirection: 'column',
          justifyContent: 'space-between',
          bottom: 60}}>
        <TouchableOpacity>
        <View  style={{width: 150, height: 50}} >
        <Button
            color="tomato"
            title="Recipes"
            onPress={() =>
              this.props.navigation.navigate('NavRec')
            }
          />
        </View>
        </TouchableOpacity>
        <View  style={{width: 150, height: 50}} >
          <Button
            color="tomato"
            title="Categories"
            onPress={() =>
              this.props.navigation.navigate('NavCat')
            }   
          />
          </View>
          <TouchableOpacity>
          <View  style={{width: 150, height: 50}} >
          <Button
            color="tomato"
            title="Favourites"
            onPress={() =>
              this.props.navigation.navigate('NavFav')
            }
          />
          </View>
          </TouchableOpacity>
        </View>
        </View>      
      );
    }
}
        