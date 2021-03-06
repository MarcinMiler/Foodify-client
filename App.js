import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { Font } from 'expo'

import TypeFood from './Components/TypeFood'
import Navbar from './Components/Navbar'

class App extends Component {

  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'icomoon': require('./resources/fonts/icomoon.ttf'),
      'montserratMedium': require('./resources/fonts/montserratMedium.ttf'),
      'montserratRegular': require('./resources/fonts/montserratRegular.ttf'),
    })
    this.setState({fontLoaded: true})
  }

  render() {
    if(!this.state.fontLoaded) { return null }
    return (
      <View>
      <Navbar />
      <ScrollView>
        
        <TypeFood />
      </ScrollView>
      </View>
    )
  }
}

export default App
