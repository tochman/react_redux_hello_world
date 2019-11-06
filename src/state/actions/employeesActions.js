import axios from 'axios'


const fetchEmployees = () => {
  return dispatch => {
    axios.get('https://reqres.in/api/users')
    .then(response => {
      return dispatch({type: 'FETCH_EMPLOYEES', payload: response.data.data})
    })
  }
}


export default fetchEmployees