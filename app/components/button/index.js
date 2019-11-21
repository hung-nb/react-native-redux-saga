import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const StyledButton = (props) => {
  const { title } = props

  return (
    <Button style={styles.button} title={title} />
  )
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 20
  }
})

export default StyledButton
