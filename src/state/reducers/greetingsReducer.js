import initialState from '../store/initialState'

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_GREETING':
      console.error('i am in the greetingReducer...')
      console.table(action)
      return {
        ...state,
        greeting: state.proposedGreeting,
        proposedGreeting: ''
      }
    case 'PROPOSE_GREETING':
      console.table(state)
      return {
        ...state,
        proposedGreeting: action.payload
      }
    default:
      return state
  }
}

export default greetingsReducer