import React, { Component } from 'react'
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-title">Fuck you</div>
                <FormGroup>
                        <InputGroup>
                            <FormControl type="text" placeholder="Search for the fucker" />
                            <InputGroup.Addon>
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
