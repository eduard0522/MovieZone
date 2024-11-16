import Axios from './Axios'

export const Login = async (data) => {
  const { email, password } = data
  console.log(email, password)
  try {
    const response = await Axios.post('/api/login', {
      email,
      password
    })
    console.log(response.data)
    return {
      status: response.status,
      message: response.data.username
    }
  } catch (error) {
    return {
      error: true,
      status: error.response.status,
      message: error.response.data.message
    }
  }
}
