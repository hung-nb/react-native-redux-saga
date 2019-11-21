import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Spinner = (props) => {

  const { loading } = props

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} />
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
