import React from "react";
import Form from 'react-bootstrap/Form';

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
                <h1 styel={{ paddingTop: ' 20px' }}>A Page about Horned Beasts</h1>

                <Form.Group>
                    <Form.Label>How Many Horns?</Form.Label>
                    <Form.Select
                        onChange={x => this.registerChoice(x.target.value)}
                        style={{
                            width: '8%',
                            marginBottom: '15px',
                            marginRight: "46%",
                            marginLeft: "46%"
                        }}>
                        <option value={0}>All Horns</option>
                        {this.state.hornsArray.map(
                            item => <option value={item}>{item}</option>)}
                    </Form.Select>
                </Form.Group>

            </header >
        );
    }
}

export default Header;