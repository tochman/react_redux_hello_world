

const employeesReducer = (state = { collection: [] }, action) => {
  switch (action.type) {
    case 'FETCH_EMPLOYEES':
      return {
        ...state,
        collection: action.payload
      }
    default:
      return state
  }

}

export default employeesReducer