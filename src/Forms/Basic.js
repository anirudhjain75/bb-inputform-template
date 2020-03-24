import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';

const Basic = ({style}) => {
    return (
        <Form style={style}>
            <Form.Group as={Row} controlId="entityName">
                <Form.Label column sm="3">Name</Form.Label>
                <Col sm="8">
                    <Form.Control type="text"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="entityDescription">
                <Form.Label column sm="3">Description</Form.Label>
                <Col sm="8">
                    <Form.Control as={"textarea"} type="textarea"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="entityEdition">
                <Form.Label column sm="3">Edition</Form.Label>
                <Col sm="8">
                    <Form.Control type="text"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="entityCategory">
                <Form.Label column sm="3">Category</Form.Label>
                <Col sm="8">
                    <Form.Control as={"select"} custom>
                        <option>SciFy</option>
                        <option>Documentary</option>
                        <option>Journal</option>
                        <option>Others</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="entityReleaseDate">
                <Form.Label column sm="3">Release Date</Form.Label>
                <Col sm="8">
                    <Form.Control type="date"/>
                </Col>
            </Form.Group>
        </Form>
    )
};

export default Basic;
