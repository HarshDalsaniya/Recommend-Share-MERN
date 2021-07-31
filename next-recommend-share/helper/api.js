import axios from "axios"

const login = (user) => {
    return axios.post(`http://localhost:4000/api/user/login`, {email:user.email,password:user.password})
        .then((result) =>result)
        .catch((error) => console.log(error))
}
const register = (user) => {
    console.log(user)
    return axios.post(`http://localhost:4000/api/user/register`, user)
        .then((result) =>result)
        .catch((error) => console.log(error))
}

export {
    login,
    register
}