import React, { useState } from 'react'
import Link from "next/link"
import { connect, useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Row,

    Col,
    Button,
    Form
} from "react-bootstrap"
import Fields from '../Form-Fields/Fields';
import { changeUserPassword } from '../../redux/auth/action';
import { formFieldValidation } from "../../services/formValidation"
import{ToastifyNotification , Toastify} from "../../helper/notification"

<<<<<<< HEAD
export default function EditPassword(props){
=======
>>>>>>> c2022c46bdfb3a050fb14687fe1add02d7601339

export const EditPassword = (props) => {
    
    const dispatch = useDispatch();
    const reState = useSelector(state => state);
    const { error } = reState.authUser;
    console.log(reState.authUser)


    const [_userCurrentPassword, setUserCurrentPassword] = useState("");
    const [_userNewPassword, setUserNewPassword] = useState("");
    const [repeatNewPassword ,setUsrRepeatPassword] = useState("");
    const [submitted, setSubmitted] = useState(false)

       const onChnagePassword =(e)=>{
        e.preventDefault()
        console.log("change password") 
        setSubmitted(true)
        if(_userCurrentPassword !== ''|| _userNewPassword !== '' || repeatNewPassword !== ''){
            const user = {
                id:JSON.parse(localStorage.getItem('Recommend_Share_current_user')).id,
                currentPassword:_userCurrentPassword,
                newPassword:_userNewPassword,
                repeatNewPassword:repeatNewPassword
            }
           dispatch(changeUserPassword(user))
            ToastifyNotification({   
                type:'success',              
                message :'Password Changed successFully...!!',
                position:"top-right",
                hideProgressBar:'false',
                closeOnClick: 'true',
                pauseOnHover: 'true',
                draggable: 'true',
                progress: '',
            })

        }
    }

    return (
        <>
        <Toastify
            position="top-right "
            autoClose="2000"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
        <section className="content login-body">
            
            <Container>
                <div className="contained">
                    <div className=" six columns alpha offset-by-three password-heading ">
                        <h1>Password</h1>
                        <p>You can edit your password below.</p>
                        <div className="box white">
                        {typeof error.verifyError!='undefined' && error.verifyError!=''?
                                    <div className="help-block mb-2" style={{color:'red'}}>{error.verifyError.currentPasswordnotvalid}</div>
                                :null}
                       
                            <form onSubmit ={onChnagePassword}>
                                <div className="form-content">
                                    <Fields
                                        field="password"
                                        fieldLabel="Current password"
                                        fieldName="_userCurrentPassword"
                                        fieldValue={ _userCurrentPassword }
                                        fieldAction={ setUserCurrentPassword }
                                        fieldValidation={ [submitted, _userCurrentPassword, formFieldValidation(error, "currentPassword",_userCurrentPassword )] }
                                    />
                                    <label className="help">Enter your current password to continue</label>

                                </div>
                                {typeof error.verifyError!='undefined' && error.verifyError!=''?
                                <div className="help-block mb-2" style={{color:'red'}}>{error.verifyError.passwordnotmatch}</div>
                            :null}
                                <div className="form-content">
                              
                                    <Fields
                                        field="password"
                                        fieldLabel="New password"
                                        fieldName="_userNewPassword"
                                        fieldValue={ _userNewPassword }
                                        fieldAction={ setUserNewPassword }
                                        fieldValidation={ [submitted, _userNewPassword, formFieldValidation(error, "newPassword",_userNewPassword )]}
                                    />
                                    <label className="help">Must be at least 6 characters.</label>

                                </div>
                                <div className="form-content">
                                    <Fields
                                        field="password"
                                        fieldLabel="Repeat Password"
                                        fieldName="repeatNewPassword"
                                        fieldValue={ repeatNewPassword }
                                        fieldAction={ setUsrRepeatPassword }
                                        fieldValidation={ [submitted, repeatNewPassword, formFieldValidation(error, "repeatNewPassword",repeatNewPassword )]}
                                    />
                                </div>

                                <div className="buttons">
                                    <Link href="/">
                                    <a  className="button clear small">
                                        Cancel
                                    </a>
                                    </Link>
                                    <button type="submit" className="button">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}
<<<<<<< HEAD
=======

const mapStateToProps = (authUser) => {
    const { loding, currentUser, error } = authUser
    // return {loding, currentUser, error };
}
const mapDispatchToProps = {
    changeUserPasswordAction:changeUserPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword)
>>>>>>> c2022c46bdfb3a050fb14687fe1add02d7601339
