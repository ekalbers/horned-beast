import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import SelectedBeast from './SelectedBeast';

class HornedBeast extends React.Component {
    constructor(props) {
        super();
        this.state = {
            favorites: 0,
        };
        console.log(props);
        console.log(this.state);
    }

    trackFavorites = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    pictureClick = () => {
        console.log(this.props.index);
        this.props.updateState(this.props.index);
        console.log(this.props.index);
        this.props.createModal(this.props.index);
        console.log('pictureClick');
    }

    render() {
        return (
            <Col>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top"
                        src={this.props.imageUrl}
                        title={this.props.title}
                        onClick={this.pictureClick} />
                    <Card.Header >{this.props.title}</Card.Header>
                    {/* <Card.Body>
                        <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>  */}
                    <Button onClick={this.trackFavorites}>♥ {this.state.favorites}</Button>
                </Card>
            </Col>
        );
    }
}

export default HornedBeast;