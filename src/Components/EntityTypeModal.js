import React from 'react';
import {Button, Modal} from "react-bootstrap";
import * as PropTypes from "prop-types";

function EntityTypeModal(props) {
    return <Modal show={props.show} onHide={props.onHide} centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Choose Entity Type
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <button onClick={props.onClick}>
                <div>
                    <h3>Work</h3>
                    <p>"a distinct intellectual or artistic creation expressed in words and/or images. Here we are not
                        talking, for example, about a physical book, but the introduction, story, illustrations, etc. it
                        contains.
                        Examples: novel, poem, translation, introduction & foreword, article, research paper, etc."</p>
                </div>
            </button>
            <button onClick={props.onClick1}>
                <div>
                    <h3>Edition</h3>
                    <p>"a published physical or digital version of one or more Works.
                        Examples: book, anthology, comic book, magazine, leaflet
                        Note: An Author can self-publish an Edition</p>
                </div>
            </button>
            <button onClick={props.onClick2}>
                <div>
                    <h3>Edition Group</h3>
                    <p>"a logical grouping of different Editions of the same book.
                        Example: paperback, hardcover and e-book editions of a novel"</p>
                </div>
            </button>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onClick3}>Close</Button>
        </Modal.Footer>
    </Modal>;
}

EntityTypeModal.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    onClick: PropTypes.func,
    onClick1: PropTypes.func,
    onClick2: PropTypes.func,
    onClick3: PropTypes.func
};

export default EntityTypeModal;