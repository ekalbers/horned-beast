import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
    constructor() {
        super();
        this.state = {
            favorites: 0,
        };
    }

    trackFavorites = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    pictureClick = () => {
        this.props.updateState(this.props.index);
        this.props.showModal();
    }

    render() {
        return (
            <Col key={this.props._id}>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top"
                        src={this.props.imageUrl}
                        title={this.props.title}
                        onClick={this.pictureClick} />
                    <Card.Header >{this.props.title}</Card.Header>
                    <Button onClick={this.trackFavorites}>
                        ♥ {this.state.favorites}
                    </Button>
                </Card>
            </Col>
        );
    }
}

export default HornedBeast;