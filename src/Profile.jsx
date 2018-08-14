import React, {Component} from 'react'


export default class Profile extends Component{

render()
{
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
   
    artist=this.props.artist !=null?this.props.artist:artist;
    return(
        <div>       
                    <img className="profile-img" src={artist.images[0].url}/>

                    <div>{artist.name}</div>
                    <div>{artist.followers.total}</div>

        </div>
    )
}

}