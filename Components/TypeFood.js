import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from '../selection.json'
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon')
import { LinearGradient } from 'expo'

const TypeFood = ({

}) => (
    <View style={ styles.container }>

        <LinearGradient elevation={15} colors={['#5FFCFF', '#43FF9E']} start={[0.1, 1.0]} end={[1.0, 0.1]} style={[ styles.items, { marginTop: 0 } ]}>
            <Text style={ styles.text }>Salad</Text>
            <Icon style={ styles.icon } name='salad' size={72} color='white' />
        </LinearGradient>

        <LinearGradient elevation={15} colors={['#DA53FF', '#7328FF']} start={[0.1, 1.0]} end={[1.0, 0.1]} style={ styles.items }>
            <Text style={ styles.text }>Dessert</Text>
            <Icon style={ styles.icon } name='pancake' size={72} color='white' />
        </LinearGradient>

        <LinearGradient elevation={15} colors={['#FF7676', '#FFE175']} start={[0.1, 1.0]} end={[1.0, 0.1]} style={ styles.items }>
            <Text style={ styles.text }>Meat</Text>
            <Icon style={ styles.icon } name='meat' size={72} color='white' />
        </LinearGradient>

        <LinearGradient elevation={15} colors={['#643DFF', '#75EDFF']} start={[0.1, 1.0]} end={[1.0, 0.1]} style={ styles.items }>
            <Text style={ styles.text }>Seafood</Text>
            <Icon style={ styles.icon } name='octopus' size={72} color='white' />
        </LinearGradient>


    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 120,
    },
    items: {
        marginTop: 40,
        width: '100%',
        height: 135,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        shadowColor: 'red',
        shadowOffset: {
          width: 3,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5
    },
    text: {
        fontFamily: 'montserratRegular',
        color: 'white',
        fontSize: 42,
        marginLeft: 30,
    },
    icon: {
        marginRight: 30
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
      },
    
  })

export default TypeFood