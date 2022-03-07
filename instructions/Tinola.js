// import React, { Component } from 'react'
// import { AppRegistry, StyleSheet, Text, View } from 'react-native'
// import CountDown from 'react-native-countdown-component';
// import Swiper from 'react-native-swiper'

// const styles = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })

 

// export default class SwiperComponent extends Component {
//   render() {
//     return (
    
//       <Swiper style={styles.wrapper} showsButtons={false}>
//         <View style={styles.slide1}>
//           <Text style={styles.text} >Directions</Text>
//           <Text style={styles.text} >1.Heat oil in a pot.</Text>
//         </View>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>2.Sauté garlic, onion, and ginger. Add the ground black pepper.</Text>
//         </View>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>3.When the onion starts to get soft, add the chicken. Cook for 5 minutes or until it turns light brown.</Text>
//           <CountDown
//         until={60 * 5 + 0}
//         size={20}
//         // onFinish={() => alert('Finished')}
//         digitStyle={{backgroundColor: '#FFF'}}
//         digitTxtStyle={{color: '#1CC625'}}
//         timeToShow={['M', 'S']}
//         timeLabels={{m: 'Min', s: 'Sec'}}
//         />
//         </View>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>4.Pour the water. Let boil. Cover and then set the heat to low. Boil for 40 minutes.</Text>
//           <CountDown
//         until={60 * 40 + 0}
//         size={20}
//         // onFinish={() => alert('Finished')}
//         digitStyle={{backgroundColor: '#FFF'}}
//         digitTxtStyle={{color: '#1CC625'}}
//         timeToShow={['M', 'S']}
//         timeLabels={{m: 'Min', s: 'Sec'}}
//         />
//         </View>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>5.Scoop and discard the scums and oil on the soup.</Text>
//         </View>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>6.Add the Knorr chicken cube and chayote or papaya. Stir. Cover and cook for 5 minutes.</Text>
//           <CountDown
//         until={60 * 5 + 0}
//         size={20}
//         // onFinish={() => alert('Finished')}
//         digitStyle={{backgroundColor: '#FFF'}}
//         digitTxtStyle={{color: '#1CC625'}}
//         timeToShow={['M', 'S']}
//         timeLabels={{m: 'Min', s: 'Sec'}}
//         />
//         </View>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>7.Put the malunggay and hot pepper leaves in the pot and pour the fish sauce in. Continue to cook for 2 minutes.</Text>
//           <CountDown
//         until={60 * 2 + 0}
//         size={20}
//         // onFinish={() => alert('Finished')}
//         digitStyle={{backgroundColor: '#FFF'}}
//         digitTxtStyle={{color: '#1CC625'}}
//         timeToShow={['M', 'S']}
//         timeLabels={{m: 'Min', s: 'Sec'}}
//         />
//         </View>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>8.Transfer to a serving bowl. Serve.</Text>
//         </View>
//       </Swiper>
//     )
//   }
// }

// AppRegistry.registerComponent('myproject', () => SwiperComponent)

import React, { Component } from 'react';
import {Image, Dimensions, View, Text } from 'react-native';
import CountDown from 'react-native-countdown-component';
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
}

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class Tinola extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
           <Image
           source={require("../assets/recipes/tinola-manok.jpg")}
            style={{
              width: "100%",
              flex:1,
            }}>
          </Image>
      <Text style={{fontSize: 30, color:"black" }}> Directions</Text>
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={false}
      >
        <View style={styles.slide}>
          <Text>1.Heat oil in a pot.</Text>
        </View>
        <View style={styles.slide}>
        <Text>2.Sauté garlic, onion, and ginger. Add the ground black pepper.</Text>
        </View>
        <View style={styles.slide} >
          <Text>3.When the onion starts to get soft, add the chicken. Cook for 5 minutes or until it turns light brown.</Text>
          <CountDown
        until={60 * 0 + 5}
        size={20}
        // onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Min', s: 'Sec'}}
        />
        </View>
        <View style={styles.slide} >
          <Text>4.Pour the water. Let boil. Cover and then set the heat to low. Boil for 40 minutes.</Text>
          <CountDown
        until={60 * 0 + 5}
        size={20}
        // onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Min', s: 'Sec'}}
        />
        </View>
        <View style={styles.slide} >
          <Text>5.Scoop and discard the scums and oil on the soup.</Text>
        </View>
        <View style={styles.slide} >
          <Text>6.Add the Knorr chicken cube and chayote or papaya. Stir. Cover and cook for 5 minutes.</Text>
        </View>
        <View style={styles.slide} >
          <Text>7.Put the malunggay and hot pepper leaves in the pot and pour the fish sauce in. Continue to cook for 2 minutes.</Text>
        </View>
        <View style={styles.slide} >
          <Text>8.Transfer to a serving bowl. Serve.</Text>
        </View>
      </Swiper>
      </View>
    )
  }
}

