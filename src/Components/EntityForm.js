import React, {useState} from 'react';
import {Form, Col, Row, Button, Modal} from 'react-bootstrap';
import EntityTypeModal from "./EntityTypeModal";
import EntitySpecificProperties from "./EntitySpecificProperties";
// import TypeOptionCard from './typeOptionCard';

const EntityForm =  () => {
    let [entityType, setEntityType] = useState("Work");
    let [showModal, setShowModal] = useState(false);
    return (
        <Form style={styles.content}>
            <Form.Group as={Row} controlId="entityName" style={styles.textInput}>
                <Form.Label column sm="3">Name</Form.Label>
                <Col sm="8">
                    <Form.Control type="text"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="entitySortName" style={styles.textInput}>
                <Form.Label column sm="3">Sort Name</Form.Label>
                <Col sm="8">
                    <Form.Control type="text"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="entityLanguage" style={styles.textInput}>
                <Form.Label column sm="3">Language</Form.Label>
                <Col sm="8">
                    <Form.Control as="select" custom>
                        <option>LanguageA</option>
                        <option>LanguageB</option>
                        <option>LanguageC</option>
                        <option>LanguageD</option>
                        <option>LanguageE</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="entityType" style={styles.textInput}>
                <Form.Label column sm="3">Entity Type</Form.Label>
                <Col sm="8">
                    <Button onClick={() => {
                        setShowModal(true);
                    }}>{entityType}</Button>
                </Col>
                <EntityTypeModal show={showModal} onHide={() => setShowModal(false)} onClick={() => {
                    setEntityType("Work");
                    setShowModal(false);
                }} onClick1={() => {
                    setEntityType("Edition");
                    setShowModal(false);
                }} onClick2={() => {
                    setEntityType("Edition Group")
                    setShowModal(false);
                }} onClick3={() => {
                    setShowModal(false);
                }}/>
            </Form.Group>
            <Form.Group as={Row} controlId="entityAlias" style={styles.links}>
                <Col sm="3">
                    <a href="#">Add Alias</a>
                </Col>
                <Col sm="3">
                    <a href="#">Add Identifiers</a>
                </Col>
                <Col sm="4">
                    <a href="#">Add Disambiguation</a>
                </Col>
            </Form.Group>
            <div style={styles.entitySpecificProperties}>
                <EntitySpecificProperties type={entityType} />
            </div>
        </Form>
    )
};

const styles = {
    content: {
        marginTop: "2%",
    },
    textInput: {
        marginLeft: "10%",
        width: "60%",
        textAlign: "left"
    },
    links: {
        marginLeft: "10%",
        width: "60%",
        textDecoration: 'underline',
    },
    entitySpecificProperties: {
        marginLeft: "10%",
        borderWidth: 1,
        borderColor: "#000",
        width: "60%"
    }
};

export default EntityForm;