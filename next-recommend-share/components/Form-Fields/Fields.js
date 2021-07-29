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
                <div>
                    <Form.Select name={props.fieldName} onChange={(e) => { props.fieldAction(e.target.value) }}>
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
                <div>
                    <Row>
                        <Col md="9">
                            <Form.Control type={props.field} name={props.fieldName} value={props.fieldValue} onChange={(e) => { props.fieldAction(e.target.value) }}/>
                        </Col>
                        <Col md="3">
                            <Button className="button square postcode-btn ml-2">
                            {props.buttonValue}
                            </Button>
                        </Col>
                    </Row>
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
