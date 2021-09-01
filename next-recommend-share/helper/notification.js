import React from 'react'
const { ToastContainer,toast } = require("react-toastify")

export const ToastifyNotification =({type,message , postion, autoClose,hideProgressBar,closeOnClick,pauseOnHover,draggable,progress })=>

{
    // console.log("notification type -->",type)

     const notify =()=>{type == 'info'? toast.info(message,{
        position:postion,
        autoClose:autoClose,
        hideProgressBar:hideProgressBar,
        closeOnClick:closeOnClick,
        pauseOnHover:pauseOnHover,
        draggable:draggable,
        progress:progress

       })
    :type=='error' ? toast.error(message,{
        position:postion,
        autoClose:autoClose,
        hideProgressBar:hideProgressBar,
        closeOnClick:closeOnClick,
        pauseOnHover:pauseOnHover,
        draggable:draggable,
        progress:progress

       }) 
       :type == 'success'?toast.success(message,{
        position:postion,
        autoClose:autoClose,
        hideProgressBar:hideProgressBar,
        closeOnClick:closeOnClick,
        pauseOnHover:pauseOnHover,
        draggable:draggable,
        progress:progress

       }) 
       :type == 'warning'?toast.warning(message,{
        position:postion,
        autoClose:autoClose,
        hideProgressBar:hideProgressBar,
        closeOnClick:closeOnClick,
        pauseOnHover:pauseOnHover,
        draggable:draggable,
        progress:progress

       })
       : toast(message,{
        position:postion,
        autoClose:autoClose,
        hideProgressBar:hideProgressBar,
        closeOnClick:closeOnClick,
        pauseOnHover:pauseOnHover,
        draggable:draggable,
        progress:progress

       })};
    return notify()
}

export const Toastify = (props)=>{
    return(
         <ToastContainer
            position={props.postion}
            autoClose={props.autoClose}
            hideProgressBar={props.hideProgressBar}
            newestOnTop={props.newestOnTop}
            closeOnClick={props.closeOnClick}
            rtl={props.rtl}
            pauseOnFocusLoss={props.pauseOnFocusLoss}
            draggable={props.draggable}
            pauseOnHover={props.pauseOnHover}
         />

    )

}
