import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, FormControl, Button, InputGroup } from "react-bootstrap"
export const Fields = (props) => {
    if (props.field == "password" || props.field =="email" || props.field =="text" || props.field =="numeric" ) {
        return (
            <div className="form-field">
                <Form.Label className="form-lable">{props.fieldLabel}</Form.Label>
                <div>
                    <Form.Control type={props.field} className="form-control" name={props.fieldName} value={props.fieldValue} onChange={(e) => { props.fieldAction(e.target.value) }}></Form.Control>
                </div>
            </div>
        );
    }else if (props.field == "select") {
        return (
            <div className="form-field">
                <Form.Label className="form-lable">{props.fieldLabel}</Form.Label>
                <div className="_select">
                    <Form.Select name={props.fieldName} className="_select_input ready" style={{opacity: 1, cursor: "pointer", position: "absolute", width: "99.9%", border: "none", outline: "none", height: "100%", top: "0px", right: "0px"}} onChange={(e) => { props.fieldAction(e.target.value) }}>
                        <option>{props.fieldLabel}</option>
                        {props.fieldOption.map((option)=>
                            <option value={option}>{option}</option>
                        )}
                    </Form.Select>
                </div>
            </div>
        );
    }else if (props.field == "inputGroupTextButton") {
        return (
            <div className="form-field">
                <Form.Label className="form-lable">{props.fieldLabel}</Form.Label>
                <div className="d-flex justify-content-between">
                    <Form.Control type={props.field} name={props.fieldName} style={{width:"calc( 100% - 103px )"}} value={props.fieldValue} onChange={(e) => { props.fieldAction(e.target.value) }}/>
                    <Button className="button square postcode-btn" >
                    {props.buttonValue}
                    </Button>
                </div>
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
