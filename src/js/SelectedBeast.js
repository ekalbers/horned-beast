import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

    render() {
        return (
            < Modal centered show={this.props.show} onHide={this.props.closeModal}>
                {/* <img src={this.props.image_url}
                        title={this.props.title}
                        alt={this.props.title}
                        className="img-fluid" /> */}
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.props.description}</p>
                </Modal.Body>
            </Modal >
        )
    }
}

export default SelectedBeast;