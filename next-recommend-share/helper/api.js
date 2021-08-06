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
const forgotPassword = (email)=>{
    return axios.post(`http://localhost:4000/api/user/forgotpassword`,{email:email})
        .then((result) => result)
        .catch((error) =>console.log(error))
}

const resetPassword = (user) => {
    const queryParams = new URLSearchParams(window.location.search);
    const Key = queryParams.get('uniqueKey');
    console.log(Key);
    return axios.post(`http://localhost:4000/api/user/reset-password?uniqueKey=${Key}`,user)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const VerifyKey = ()=> {
    const queryParams = new URLSearchParams(window.location.search);
    const Key = queryParams.get('uniqueKey');
    return axios.get(`http://localhost:4000/api/user/uniqueKeyVerify/${Key}`)
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
    logout,
    forgotPassword,
    resetPassword,
    VerifyKey
}