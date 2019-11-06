import axios from 'axios'


const fetchEmployees = () => {
  axios.get('https://reqres.in/api/users')
    .then(response => {
      return{type: 'FETCH_EMPLOYEES', payload: response.data.data}
    })
}


export default fetchEmployees