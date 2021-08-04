import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, FormControl, Button, InputGroup } from "react-bootstrap"
export const Fields = (props) => {
    if (props.field == "password" || props.field =="email" || props.field =="text" || props.field =="numeric" ) {        
        return (
            <>
            <div className="form-field">
                <Form.Label className="form-lable">{props.fieldLabel}</Form.Label>
                <div>
                    <Form.Control type={props.field} className="form-control" name={props.fieldName} value={props.fieldValue} onChange={(e) => { props.fieldAction(e.target.value) }}></Form.Control>
                </div>
                {(props.fieldValidation!="undefined" && props.fieldValidation[0] && !props.fieldValidation[1]) || (typeof props.fieldValidation[3]!='undefined'&&props.fieldValidation[3]!='' && props.fieldValidation[3].find((field)=>{return field==props.fieldName})==props.fieldName ) ?
                    <div className="help-block" style={{color:'red'}}>{typeof props.fieldValidation[2]!="undefined"?props.fieldValidation[2].message:null}</div>
                :null}
            </div>
            </>
        );
    }else if (props.field == "select") {
        return (
            <div className="form-field">
                <Form.Label className="form-lable">{props.fieldLabel}</Form.Label>
                <div className="_select">
                    <Form.Select name={props.fieldName} className="_select_input ready" style={{opacity: 1, cursor: "pointer", position: "absolute", width: "99.9%", border: "none", outline: "none", height: "100%", top: "0px", right: "0px"}}  onChange={(e) => { props.fieldAction(e.target.value) }}>
                        <option selected disabled>{props.fieldLabel}</option>
                        {props.fieldOption.map((option)=>
                            <option value={option.value}>{option.title}</option>
                        )}
                    </Form.Select>
                </div>
                {(props.fieldValidation!="undefined" && props.fieldValidation[0] && !props.fieldValidation[1]) || (typeof props.fieldValidation[3]!='undefined'&&props.fieldValidation[3]!='' && props.fieldValidation[3].find((field)=>{return field==props.fieldName})==props.fieldName ) ?
                    <div className="help-block" style={{color:'red'}}>{typeof props.fieldValidation[2]!="undefined"?props.fieldValidation[2].message:null}</div>
                :null}
            </div>
        );
    }else if (props.field == "textarea") {
        return (
            <div className="form-field">
                <Form.Label className="form-lable">{props.fieldLabel}</Form.Label>
                <div>
                    <Form.Control type={props.field} className="form-control" as="textarea" rows={3} name={props.fieldName} onChange={(e) => { props.fieldAction(e.target.value) }}>{props.fieldValue}</Form.Control>
                </div>
            </div>
        );
    }else{
        return(
            <>
            </>
        )
    }
}

export default Fields
