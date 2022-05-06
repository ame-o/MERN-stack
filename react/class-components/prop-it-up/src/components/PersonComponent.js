import React, {Component} from 'react';

class PersonComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    addAge = () => {
        let age = this.state.age;
        age++;
        this.setState({age: age});
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.addAge}> Add Age</button>
            </div>
        )

    }
}

export default PersonComponent;