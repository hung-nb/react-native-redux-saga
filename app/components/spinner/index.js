import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10
  }
})

export default Spinner
