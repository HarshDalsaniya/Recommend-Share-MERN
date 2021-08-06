import Router from 'next/router';

const isAuthenticate = async(path) =>{
    try{
        const userVerify= await JSON.parse(localStorage.getItem("Recommend_Share_current_user"))
        const urls=["/","/reset-password","/login", "/register", "/home-improvements-and-maintenance", "/champions", "/about-us", "/faq", "/terms-of-use", "/gdpr", "/contact-us"];
        console.log(!urls.includes(path))
        if(typeof userVerify=="object" && userVerify==null && !urls.includes(path)){
            return Router.push('/login')
        }
        if(typeof userVerify=="object" && userVerify!=null && (path=="/login" || path=="/register" || path=="/")){
            console.log("this is signin")
            return Router.push("/secure")
        }   
    }catch(e){
        // console.log(e)
    }
}

export default isAuthenticate