import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

console.log('SelectedBeast')

function SelectedBeast() {
    /* constructor(props) {
        super(props);
        console.log(props);
        console.log('SelectedBeast');
    } */

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <div>
            < Modal centered show={show} onHide={handleClose}>
                {/* <img src={this.props.image_url} 
                title={this.props.title} 
                alt={this.props.title} 
                className="img-fluid" /> */}
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal >
        </div>
    )
}

export default SelectedBeast;