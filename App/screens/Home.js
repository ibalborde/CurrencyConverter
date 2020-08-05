import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

import colors from "../constants/colors"
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1
    },

})

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    </View>
  );
};