import axios from "axios"


const login = (user) => {
    return axios.post(`http://localhost:4000/api/user/login`, {email:user.email,password:user.password})
        .then((result) =>result)
        .catch((error) => console.log(error))
}
const register = (user, path) => {
    return axios.post(`http://localhost:4000/api/user/${path}`, user)
        .then((result) => result)
        .catch((error) => console.log(error))
}
 const logout = () => {
     const Token = JSON.parse(localStorage.getItem('Recommend_Share_current_user'))
     return axios.post(`http://localhost:4000/api/user/logout/${Token.token}`)
     .then((result) => result)
     .catch((error) => console.log(error))
 }

export {
    login,
    register,
    logout
}