import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hornsArray: this.props.hornsArray()
        };
    }

    registerChoice = (value) => {
        this.props.updateHorns(value);
        console.log(value);
    }

    render() {
        return (
            <header>
                <h1>A Page about Horned Beasts</h1>

                <Container fluid="lg" className="md-3" style={{ alignContent: "center" }}>
                    <Row>
                        <Col>
                            <Form.Group style={{ alignItems: "center" }}>
                                <Form.Label>How Many Horns?</Form.Label>
                                <Form.Select onChange={x => this.registerChoice(x.target.value)}
                                    style={{
                                        width: '12%',
                                        marginBottom: '15px',
                                        marginRight: "44%",
                                        marginLeft: "44%"
                                    }}>
                                    <option value={0}>All Horns</option>
                                    {this.state.hornsArray.map(item => <option value={item}>{item}</option>)}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>

            </header >
        );
    }
}

export default Header;