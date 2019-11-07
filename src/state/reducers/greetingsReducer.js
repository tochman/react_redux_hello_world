import initialState from '../store/initialState'

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_GREETING':
      return {
        ...state,
        greeting: state.proposedGreeting,
        proposedGreeting: ''
      }
    case 'PROPOSE_GREETING':
      return {
        ...state,
        proposedGreeting: action.payload
      }
    default:
      return state
  }
}


export default greetingsReducer