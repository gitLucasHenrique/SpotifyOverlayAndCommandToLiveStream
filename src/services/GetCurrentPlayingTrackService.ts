import axios from "axios";

interface artistData{
    name: string;
}

class GetCurrentPlayingTrack {
  public async execute(accessToken:string){    
    try {
      const dataResponseSpotify = await axios.get('https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers:{
        'Authorization':`Bearer ${accessToken}`
      },
      params:{
        market:'BR'
      }
      });
      
      const {name, artists} = dataResponseSpotify.data.item;
      
      const artistResponse = artists.map((artist:artistData)=>{
        return artist.name;
      })

      return `${name} - by:${artistResponse}`;  
      
    } catch (error) {
      console.log(error);
    }
  }
}

export default GetCurrentPlayingTrack;