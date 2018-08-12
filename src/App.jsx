import React, { Component } from 'react'
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };

    }

    search() {
        const API_URI="https://api.spotify.com/v1/search?";
        const FETCH_URI=API_URI+ "&q=" + this.state.query+"&type=artsist&limit=1"
    }
    render() {
        return (
            <div className="App">
                <div className="App-title">Fuck you</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for the fucker" query={this.state.query} onChange={event => { this.setState({ query: event.target.value }) }} onKeyPress={event => {
                            if (event.key == 'Enter') {
                                this.search()
                            }
                        }} />
                        <InputGroup.Addon onClick={() => this.search()}
                        >
                            <Glyphicon glyph="search"
                            ></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="profile">
                    <div>Artist Name</div>
                    <div>Artist Picture</div>
                </div>
                <div className="gallery">
                    Gallery
                </div>
            </div>

        )

    };
}
