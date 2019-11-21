import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledButton from 'app/components/button'

const Home = () => {
  return (
    <View style={styles.container}>
      <StyledButton title="Sign in with Facebook" />
      <StyledButton title="Sign in with Google" />
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
