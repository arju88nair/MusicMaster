import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
import Profile from  './Profile'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '',artist:null };

    }

    search() {
        var bearer='Bearer BQDsxMZUm77r0pVLCdYtA_qzTbwsI2ypndHu9WP-f94mUz-S4RJojz2XshS5xSUc1rzJrw_0lxbEXFscZm3c2HAlEeAJg2Jyzp1z8EVdGr0vAR0Y-tq3uMkQf7DcDSnPK50kREA7wL7i6Sjj4JfBNeebE0J9OwiRjiwxKDw1G8WK4c9f-pPw4wNXGoMPKwgSzKw5WOtL4tHIu-K74Q'
        const API_URI="https://api.spotify.com/v1/search?";
        const FETCH_URI=`${API_URI}q=${this.state.query}&type=artist&limit=1`;

        axios({
            url: FETCH_URI,
            method: 'get',
            headers: {
                'Authorization': bearer,
            }
         })
         .then(response => {

            let artist=response.data.artists.items[0];
            this.setState({artist})
            console.log(this.state)

         }) 
         .catch(err => {
            console.log(err);
         });

    }



    
    render() {
        return (
            <div className="App">
                <div className="App-title">Fuck you</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search for the fucker" query={this.state.query} onChange={event => { this.setState({ query: event.target.value }) }} onKeyPress={event => {
                            if (event.key === 'Enter') {
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
                {
                    this.state.artist !== null ?
                        <div>
                            <Profile artist={this.state.artist} />
                        </div>
                    :
                        <div>No artist found</div>

                }
            </div>

        )

    };
}
