import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from '../selection.json'
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon')

const Navbar = ({

}) => (
    <View elevation={15} style={[ styles.container, styles.container2 ]}>
        <Icon name="menu" size={18} />
        <Text style={ styles.title }>Choose type of food</Text>
        <Icon name="cart" size={24} />
    </View>
)

const styles = StyleSheet.create({
    container2: {
        width: '100%',
        padding: 20,
        paddingTop: 40,
        paddingBottom: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: -20,
        left: 0,
    },
    title: {
        fontFamily: 'montserratRegular',
        fontSize: 24
    }
})

export default Navbar