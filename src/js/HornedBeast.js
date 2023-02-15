import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
            <div >
                <Card style={{ width: "50%" }}>
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
                <br></br>
                <br></br>
            </div >
        )
    }
}

export default HornedBeast;