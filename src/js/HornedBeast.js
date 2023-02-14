import React from 'react';

class HornedBeast extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title}></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;