import axios from 'axios'

export const Login = async (data) => {
  const { username, password } = data
  try {
    const response = await axios.post('http://localhost:3100/api/login', {
      email: username,
      password
    })
    console.log(response)
  } catch (error) {
    if (error.status === 404) {
      console.log(error.response.data.message)
    }
  }
}
