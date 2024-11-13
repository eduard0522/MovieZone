import Axios from './Axios'

const Register = async (data) => {
  const res = await Axios.post('/api/register', {
    username: data.username,
    email: data.email,
    password: data.password

  })
  return res
}
export default Register
