import React,{useState} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Fields from '../components/Form-Fields/Fields';
import { Container,Row,Col} from "react-bootstrap"
import { formFieldValidation } from "../services/formValidation"
import {contactUsData} from "../redux/bussiness/action"
import{ToastifyNotification , Toastify} from "../helper/notification"

export default function contact_us(props){
    const reState = useSelector(state => state);
    const { error } = reState.businessReducer;
    const {contactus_data} = reState.businessReducer
    const dispatch = useDispatch();
    const [name, setName]  =useState('');
    const [email, setEmail] =useState('');
    const [telephone, setTelephone] =useState('');
    const [company, setCompany] =useState('');
    const [message, setMessage] =useState('');
    const [submitted, setSubmitted] =useState(false);

    const onSubmit = (e) =>{
        e.preventDefault()
        setSubmitted(true);
        const data = {
            name:name,
            email:email,
            telephone:telephone,
            comapany_bussiness:company,
            message:message
        }
        dispatch(contactUsData(data))   
        console.log(email)
        if(email!= "" && telephone!="" && name!="" && message!="" ){
            ToastifyNotification({   
                type:'success',              
                message :'thanks for Contact with Us..!!',
                position:"top-right",
                hideProgressBar:'false',
                closeOnClick: 'true',
                pauseOnHover: 'true',
                draggable: 'true',
                progress: '',
            }) 
        } 
       
        // ToastifyNotification({   
        //     type:'error',              
        //     message :'something wrong...!!',
        //     position:"top-right",
        //     hideProgressBar:'false',
        //     closeOnClick: 'true',
        //     pauseOnHover: 'true',
        //     draggable: 'true',
        //     progress: '',
        // })
    }
    const formField = [
        {
            field:"text",
            fieldLabel:"Name",
            fieldName:"name",
            fieldValue:name,
            fieldAction:setName,
            fieldValidation:[submitted, name, formFieldValidation(error,"name",name)]
        },
        {
            field:"text",
            fieldLabel:"Telephone",
            fieldName:"telephone",
            fieldValue:telephone,
            fieldAction:setTelephone,
            fieldValidation:[submitted, telephone, formFieldValidation(error,"telephone",telephone)]
        },
        {
            field:"text",
            fieldLabel:"Company/Business",
            fieldName:"company",
            fieldValue:company,
            fieldAction:setCompany,
            fieldValidation:[submitted, company, formFieldValidation(error,"company",company)]
        },
        {
            field:"textarea",
            fieldLabel:"Message",
            fieldName:"message",
            fieldValue:message,
            fieldAction:setMessage,
            fieldValidation:[submitted, message, formFieldValidation(error,"message",message)]
        }
    ]
    return (
        <React.StrictMode>
        <section className="login-body pt-3">
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
            <Container>
                <div className="eight columns alpha offset-by-two" style={{marginTop: "5rem"}}>
                    {/* // ContentBlock ID: contact-us // */}
                    <h1>Contact Us</h1>
                    <p>Please use the form below to get in touch.</p>
                    <div className="box white">
                        <div className="contained shallow">
                            <form onSubmit={onSubmit}>
                                {formField.map((value)=>(
                                    <div key={"field_"+value.fieldName} className="contained shallow">
                                        {value.fieldLabel=="Telephone"?
                                            <Row>
                                                <Col md={6}>
                                                    <Fields 
                                                        field = "email"
                                                        fieldLabel = "Email"
                                                        fieldName = "email"
                                                        fieldValue = {email}
                                                        fieldAction = {setEmail}
                                                        fieldValidation = {[submitted, email, formFieldValidation(error,"email",email)]}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <Fields 
                                                        field = {value.field}
                                                        fieldLabel = {value.fieldLabel}
                                                        fieldName = {value.fieldName}
                                                        fieldValue = {value.fieldValue}
                                                        fieldAction = {value.fieldAction}
                                                        fieldValidation = {value.fieldValidation}
                                                    />
                                                </Col>
                                            </Row>
                                        :
                                            <Fields 
                                                field = {value.field}
                                                fieldLabel = {value.fieldLabel}
                                                fieldName = {value.fieldName}
                                                fieldValue = {value.fieldValue}
                                                fieldAction = {value.fieldAction}
                                                fieldValidation = {value.fieldValidation}
                                            />
                                        }
                                    </div>
                                ))}
                                <div className="buttons">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </React.StrictMode>
    )
}
