import axios from "axios"
import {getCurrentUser} from "./Utils"

const login = (user) => {
    return axios.post(`${process.env.API}/user/login`, { email: user.email, password: user.password })
        .then((result) => result)
        .catch((error) => console.log(error))
}
const register = (user, path) => {
    return axios.post(`${process.env.API}/user${path}`, user)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const tradesPeople = (tradespeople) => {
    return axios.post(`${process.env.API}/business/tradespeople` , tradespeople)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const forgotPassword = (email) => {
    return axios.post(`${process.env.API}/user/forgotpassword`, { email: email })
        .then((result) => result)
        .catch((error) => console.log(error))
}
const resetPassword = (user) => {
    const queryParams = new URLSearchParams(window.location.search);
    const Key = queryParams.get('uniqueKey');
    console.log(Key);
    return axios.post(`${process.env.API}/user/reset-password?uniqueKey=${Key}`, user)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const changePassword = (user) => {
    const header={
        headers:{        
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "x-access-token": getCurrentUser().token
        }
    }
    return axios.post(`${process.env.API}/user/changepassword`, user,header)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const VerifyKey = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const Key = queryParams.get('uniqueKey');
    return axios.get(`${process.env.API}/user/uniqueKeyVerify/${Key}`)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const logout = () => {
    const Token = JSON.parse(localStorage.getItem('Recommend_Share_current_user'))  
    return axios.post(`${process.env.API}/user/logout/${Token.token}`)
        .then((result) => result)
        .catch((error) => console.log(error))
}

const userData = (email) => {
    const header={
        headers:{        
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "x-access-token": getCurrentUser().token
        }
    }
    return axios.post(`${process.env.API}/profile`,{email:email},header)
        .then((result) => result)
        .catch((error) => console.log(error))
}

const updateProfile = (profileData) => {
    const header={
        headers:{        
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "x-access-token": getCurrentUser().token
        }
    }
    return axios.post(`${process.env.API}/profile/userUpdate`,profileData,header)
        .then((result) => result)
        .catch((error) => console.log(error))
}
const userBusiness = (id)=>{
    return axios.post(`${process.env.API}/business/getuserbussiness`,{id:id})
        .then((result) => result)
        .catch((error) => console.log(error))
}
const contactUs=(emaildata) => {
    return axios.post(`${process.env.API}/general/contactUs`, emaildata)
    .then((result) => result)
    .catch((error) => console.log(error))

}

const updateProfilePhoto = (profilePhoto) => {
    profilePhoto.append("email",JSON.parse(localStorage.getItem('Recommend_Share_current_user')).email)
    const header={
        headers:{        
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "x-access-token": getCurrentUser().token
        }
    }
    return axios.post(`${process.env.API}/profile/userProfilePic`,profilePhoto,header)
        .then((result) => result)
        .catch((error) => console.log(error))
}

const tradList = () =>{
   return axios.get(`${process.env.API}/business/trade_options`)
            .then((res) => res)
}

const businessSearch = (searchFilter) =>{
    var path=`${process.env.API}/feedback/list?` 
    const header={
        headers:{        
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "x-access-token": getCurrentUser().token
        }
    }
  

        searchFilter.name != null ? path = path + "name=" + searchFilter.name : ""

        searchFilter.email != null ? searchFilter.name != null ? path = path + "&email=" + searchFilter.email : path = path + "email=" + searchFilter.email : ""

        searchFilter.telephone != null ? (searchFilter.name || searchFilter.email) != null ? path = path + "&telephone=" + searchFilter.telephone : path = path + "telephone=" + searchFilter.telephone : ""

        searchFilter.trade != null ? (searchFilter.name || searchFilter.email || searchFilter.telephone) != null ? path = path + "&trade=" + searchFilter.trade : path = path + "trade=" + searchFilter.trade : ""

        searchFilter.postcode != null ? (searchFilter.name || searchFilter.email || searchFilter.telephone || searchFilter.trade) != null ? path = path + "&postcode=" + searchFilter.postcode : path = path + "postcode=" + searchFilter.postcode : ""

        searchFilter.action != "undefined" && searchFilter.action != "" && (searchFilter.action == "recommend" || searchFilter.action == "warn") ? (searchFilter.name || searchFilter.email || searchFilter.telephone || searchFilter.tradespeopleTrade || searchFilter.address_postcode) != null? path = path + "&action=" + searchFilter.action : path = path + "action=" + searchFilter.action  : ""

    return axios.get(path,header)          
        .then((res) => res)
        .catch((error) => console.log(error))
 }

const tradesPeopleDetails = (slug) =>{  
    const header={
        headers:{        
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "x-access-token": getCurrentUser().token
        }
    }
    return axios.get(`http://localhost:4000/api/tradespeople/tradespeopleDetails/${slug}`,header)
        .then((result) => result)
        .catch((error) => console.log(error))

}

const Recommendation =(tradepersonname)=>{
    const header={
        headers:{        
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "x-access-token": getCurrentUser().token
        }
    }    
    return axios.post(`${process.env.API}/feedback/recommendation`,{tradepersonname:tradepersonname},header)
        .then((result)=>result)
        .catch((error)=>console.log(error))
}

const UserData = (id)=>{
    const header={
        headers:{        
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "x-access-token": getCurrentUser().token
        }
    }    
    return axios.get(`${process.env.API}/profile/userDetails/${id}`,header)
    .then((result)=>result)
    .catch((error)=>console.log(error))
    
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
    userBusiness,
    tradList,
    businessSearch,
    contactUs,
    tradesPeopleDetails,
    Recommendation,
    UserData,
}