import React from 'react'
import { SafeAreaView, Platform, ScrollView, Linking, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import colors from '../constants/colors'
import { RowItem, RowSeparator } from '../components/RowItem'


const openUrl = (url) => {
    return Linking.openURL(url).catch( () => {
        Alert.alert("Sorry, something went wrong.", "Please try again later")
    })
}

export default () => {
     return (
       <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 25 : 0, flex: 1}}>
         <ScrollView>
           <RowItem
             text="Themes"
             onPress={() => alert("todo!")}
             rightIcon={
               <Entypo name="chevron-right" size={20} color={colors.blue} />
             }
           />
           <RowSeparator />

           <RowItem
             text="React Native Basics"
             onPress={() => openUrl("hkttps://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter ")}
             rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
           />

           <RowSeparator />

           <RowItem
             text="React Native by Example3"
             onPress={() => alert("todo!")}
             rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
           />
         </ScrollView>
       </SafeAreaView>
     );
};