import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';

const Physical = ({style}) => {
    return (
        <Form style={style}>
            <Form.Group as={Row} controlId="entityHeight">
                <Form.Label column sm="3">Height</Form.Label>
                <Col sm="8">
                    <Form.Control type="text"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="entityWidth">
                <Form.Label column sm="3">Width</Form.Label>
                <Col sm="8">
                    <Form.Control type="text"/>
                </Col>
            </Form.Group>
        </Form>
    )
};

export default Physical;
