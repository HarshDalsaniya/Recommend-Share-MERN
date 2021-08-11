import axios from "axios"


const login = (user) => {
    return axios.post(`http://localhost:4000/api/user/login`, { email: user.email, password: user.password })
        .then((result) => result)
        .catch((error) => console.log(error))
}
const register = (user, path) => {
    return axios.post(`http://localhost:4000/api/user${path}`, user)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const tradesPeople = (tradespeople) => {
    return axios.post(`http://localhost:4000/api/business/tradespeople` , tradespeople)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const forgotPassword = (email) => {
    return axios.post(`http://localhost:4000/api/user/forgotpassword`, { email: email })
        .then((result) => result)
        .catch((error) => console.log(error))
}
const resetPassword = (user) => {
    const queryParams = new URLSearchParams(window.location.search);
    const Key = queryParams.get('uniqueKey');
    console.log(Key);
    return axios.post(`http://localhost:4000/api/user/reset-password?uniqueKey=${Key}`, user)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const changePassword = (user) => {
    return axios.post(`http://localhost:4000/api/user/changepassword`, user)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const VerifyKey = () => {
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

const userData = (email) => {
    return axios.post(`http://localhost:4000/api/profile`,{email:email})
        .then((result) => result)
        .catch((error) => console.log(error))
}

const updateProfile = (profileData) => {
    return axios.post(`http://localhost:4000/api/profile/userUpdate`,profileData)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const userBusiness = (id)=>{
    console.log(id)
    return axios.post('http://localhost:4000/api/business/getuserbussiness',{id:id})
        .then((result) => result)
        .catch((error) => console.log(error))
}

const updateProfilePhoto = (profilePhoto) => {
    profilePhoto.append("email",JSON.parse(localStorage.getItem('Recommend_Share_current_user')).email)
    return axios.post(`http://localhost:4000/api/profile/userProfilePic`,profilePhoto)
        .then((result) => result)
        .catch((error) => console.log(error))
}

export {
    login,
    register,
    tradesPeople,
    logout,
    forgotPassword,
    resetPassword,
    changePassword,
    VerifyKey,
    userData,
    updateProfile,
    updateProfilePhoto,
    userBusiness
}