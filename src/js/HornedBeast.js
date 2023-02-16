import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
    constructor(props) {
        super();
        this.state = {
            favorites: 0,
        };
    }

    trackFavorites = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    render() {
        return (
            <Col>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top"
                        src={this.props.imageUrl}
                        alt={this.props.title}
                        title={this.props.title} />
                    <Card.Header >{this.props.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                    <Button onClick={this.trackFavorites}>♥ {this.state.favorites}</Button>
                </Card>
            </Col>
        );
    }
}

export default HornedBeast;