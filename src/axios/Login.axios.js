import Axios from './Axios'

export const Login = async (data) => {
  const { username, password } = data
  try {
    const response = await Axios.post('/api/login', {
      email: username,
      password
    })
    return response
  } catch (error) {
    if (error.status === 404) {
      console.log(error.response?.data.message)
    }
  }
}
