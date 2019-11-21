const defaultState = {
  loading: false
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loading: true }
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false }
    default:
      return state
  }
}

export default auth
