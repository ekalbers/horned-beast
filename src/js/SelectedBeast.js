import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

console.log('SelectedBeast')

class SelectedBeast extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log('SelectedBeast');
    }

    render() {
        return (
            <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                < Modal centered show={true} onHide={false}>
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
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal >
            </div>
        )
    }
}

export default SelectedBeast;