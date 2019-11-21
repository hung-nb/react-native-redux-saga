import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { login } from 'app/redux/actions'

import StyledButton from 'app/components/button'
import Spinner from 'app/components/spinner'

const Home = (props) => {

  const { loading, doLogin } = props

  const signInFacebook = () => {
    console.log('Sign In FB!')
    doLogin()
  }

  const signInGoogle = () => {
    console.log('Sign In GG!')
  }

  return (
    <View style={styles.container}>
      <StyledButton onPress={signInFacebook} title="Sign in with Facebook" />
      <StyledButton onPress={signInGoogle} title="Sign in with Google" />
      <Spinner loading={loading} />
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

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.auth.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doLogin: () => {
      dispatch(login())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
