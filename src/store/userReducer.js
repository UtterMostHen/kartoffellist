const INITIAL_STATE = {
  logged: false,
  user: {
    nome: null,
    email: null,
    phone_number: null,
    city: null,
    crated_at: null
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_LOGGED':
      return { ...state, logged: action.payload }
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_EMAIL':
      return { ...state, user: { email: action.payload }}
    default:
      return state
  }

}