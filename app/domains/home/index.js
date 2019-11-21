import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const Home = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Sign in with Facebook" />
      <Button style={styles.button} title="Sign in with Google" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 200,
    marginTop: 20
  }
})

export default Home
