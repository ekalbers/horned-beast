import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Container fluid="sm">
                    <Row>
                        {this.props.data.map(item => {
                            console.log(this.props);
                            if (item.horns === this.props.horns || this.props.horns === 0) {

                                return (<HornedBeast
                                    title={item.title}
                                    index={item._id - 1}
                                    key={item._id}
                                    imageUrl={item.image_url}
                                    showModal={this.props.showModal}
                                    updateState={this.props.updateState}
                                    description={item.description} />);
                            } else {
                                return null;
                            }
                        })}
                    </Row>
                </Container>
            </main >
        )
    }
}

export default Main;