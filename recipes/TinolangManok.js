import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class TinolangManok extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/tinola-manok.jpg")}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: "32%",
              justifyContent: "center",
              alignItems: "center",
              opacity: 1,
              flex:1,
              justifyContent:'flex-end'
            }}>
          </ImageBackground>
        {/* <View style={{
          width: 220,
          height: 550,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{ fontSize: 50, color:"white" }}> Tinolang Manok </Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{margin:20,fontSize: 24, color:"black" }}>Tinolang Manok</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>2 lbs. chicken cut into serving pieces</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 cup malunggay leaves</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 cup hot pepper leaves</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/8 teaspoon ground black pepper</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 piece unripe papaya wedged</Text>
          <Text style={{fontSize: 15, color:"black" }}>6 cups water</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 piece Knorr chicken cube</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 piece onion sliced</Text>
          <Text style={{fontSize: 15, color:"black" }}>4 cloves garlic crushed and chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 thumbs ginger julienne</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 tablespoons fish sauce patis</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>3 tablespoons vegetable oil</Text>

          <TouchableOpacity>
          <View  style={{width: 300, height: 50}} >
          <Button
            title="Start"
            onPress={() =>
              this.props.navigation.navigate('Tinola')
            }
          />
          </View>
        </TouchableOpacity> 
              
        </ScrollView>
        </View>
      )
}
}