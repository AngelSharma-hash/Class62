import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm


export default class App extends React.Component {
  constructor() {
    super();
    //create the state - constructor
    this.state = { weather: '' };
  }

  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=20&lon=72';
    var response = await fetch(url);
    var responseJson = await response.json();
    //changing the state - setState
    this.setState({ weather: responseJson });
    console.log(responseJson);
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            {this.state.weather.main.temp}&deg;C
          </Text>
          <Text style={styles.paragraph}>
            {this.state.weather.main.humidity} Humidity
          </Text>
          <Text style={styles.paragraph}>
            {this.state.weather.weather[0].description}
          </Text>
          <Image source={require("./unnamed.jpg")} style={styles.image} />
          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 4,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width:200,
    height:200,
    alignSelf:"center"
  
  }
});
