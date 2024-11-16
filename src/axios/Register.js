import Axios from './Axios'

const Register = async (data) => {
  try {
    const res = await Axios.post('/api/register', {
      username: data.username,
      email: data.email,
      password: data.password

    })
    return {
      status: res.status,
      message: res.data.message
    }
  } catch (error) {
    if (error.response) {
      return {
        error: true,
        status: error.status,
        message: error.response.data.message
      }
    }
  }
}
export default Register
