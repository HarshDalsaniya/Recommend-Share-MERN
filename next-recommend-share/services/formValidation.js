export const formFieldValidation = (error,fieldName,fieldVal) =>{
    if(typeof error.blankValue!="undefined"&&typeof error.invalidValue!="undefined"){
        if(typeof error.blankValue[fieldName]!="undefined")
            return {message:error.blankValue[fieldName].replace("_"," ").replace(/(?: |\b)(\w)/g, function(key, p1) {return key.toUpperCase();})};
        if(typeof error.invalidValue[fieldName]!="undefined")
            return {message:error.invalidValue[fieldName]}
    }else{
        if(fieldVal==""){
            return {message:"Please Enter your "+fieldName}
        }
    }
}