import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
import Profile from  './Profile'
const redirectURI = 'http://localhost:3000';
const cliendId = 'e41ec9e599ee4934bbfdceeb4dee70e0';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '',artist:null ,accessToken:''};

    }

componentDidMount(){
    this.getAccessToken();
}
    getAccessToken() {
        console.log(this.state)
        if(this.state.accessToken =="") {
          const url = window.location.href;
          const newToken = url.match(/access_token=([^&]*)/);
          const newExpire = url.match(/expires_in=([^&]*)/);
        if (newToken && newExpire) {
            let accessToken = newToken[1];
            let expiresIn = Number(newExpire[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            this.setState({accessToken})
          } else {
            const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${cliendId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = spotifyAuthUrl;
          }
        }
      }

    search() {
        let access_tokens=this.state.accessToken;
        var bearer='Bearer '+access_tokens;
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
