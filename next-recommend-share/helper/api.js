import axios from "axios"


const login = (user) => {
    return axios.post(`http://localhost:4000/api/user/login`, {email:user.email,password:user.password})
        .then((result) =>result)
        .catch((error) => console.log(error))
}
const register = (user) => {
    
}
 const logout = () => {
     const Tokne = localStorage.getItem('Recommend_Share_current_user')
     console.log(Token)
     return axios.post(`http://localhost:4000/api/user/logout/${Token}`)
     .then((result) => console.log(result))
     .catch((error) => console.log(error))
 }

export {
    login,
    register,
    logout
}