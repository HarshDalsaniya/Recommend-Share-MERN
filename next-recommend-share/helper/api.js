import axios from "axios"

const login = (user) => {
    return axios.post(`http://localhost:4000/api/login`, {email:user.email,password:user.password})
        .then((result) =>result)
        .catch((error) => console.log(error))
}
const register = (user) => {
    
}

export {
    login,
    register
}