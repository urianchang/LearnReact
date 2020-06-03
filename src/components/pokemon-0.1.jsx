import React, {Component} from 'react';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max) + min);
}

export class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pkData: null,
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const randomPk = getRandomInt(1, 151);
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPk}`, {mode: 'cors'})
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Something went wrong...");
                }
            })
            .then(json => {
                this.setState({ pkData: json, isLoading: false });
            })
            .catch(error => {
                this.setState({ error, isLoading: false });
            });
    }

    render() {
        const { pkData, isLoading, error } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }
        if (pkData && !isLoading) {
            const name = pkData.name;
            const sprite = pkData.sprites.front_default;
            return(
                <div>
                    <h3>You got a...</h3>
                    <img src={sprite} alt={name} />
                    <p>{name}</p>
                </div>
            );
        }
        return <div>Loading...</div>;
    }
}
