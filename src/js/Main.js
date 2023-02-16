import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <main>
                <Container fluid="sm">
                    <Row>
                        {this.props.data.map(item => {
                            return <HornedBeast
                                title={item.title}
                                index={item._id - 1}
                                imageUrl={item.image_url}
                                createModal={this.props.createModal}
                                updateState={this.props.updateState}
                                description={item.description} />;
                        })}
                    </Row>
                </Container>
            </main >
        )
    }
}

export default Main;