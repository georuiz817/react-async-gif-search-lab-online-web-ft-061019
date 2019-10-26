import React from 'react'
import GifList from '/Users/dawn/react-async-gif-search-lab-online-web-ft-061019/src/components/GifList.js'
//import GifSearch from '/Users/dawn/react-async-gif-search-lab-online-web-ft-061019/src/components/GifSearch.js'


export default class GifListContainer extends React.Component {
 // we are making our state object an array of our gifs we will be fetching
    state = {
        arrayOfGifs: []
    }

// we are rendering out gifsearch and gif list, gifsearch will have acess to the fetchgifs for searching
// through a prop, and gif list will have acess to our array of lists to render them out in a list 
//  <GifSearch fetchGifs={this.fetchGifs} />    
render(){
        return(
            <div>
          
            <GifList allgifs={this.state.arrayOfgifs} /> 
            </div>
        )
    }
    
    // we will fetch our gifs from the desired sire
    // then the response we will have rendered as redable json
    // then we will take the data(gifs) and set(change) our state of arrayof gifs to
    // the gifs we are grabbing . the data hash and then slicing and taking the first 3 
    fetchGifs(){
        fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then( res => res.json())
        .then(gifs => {
            this.setState({
                arrayOfGifs: gifs.data.slice(0, 3)
            })
        })
    }

// once gif search and gif list are rendered (mounted) to the dom we will fetch the gifs
// from the website to render them  
    componentDidMount() {
        this.fetchGifs()
      }
     }





//In our app the <GifListContainer /> will be responsible for fetching the data from 
//the giphy API, storing the first 3 gifs from the response in its component state, 
//and passing that data down to its child, the <GifList> component, as a prop.

//It will also render a <GifSearch /> component that renders the form. 
//<GifListContainer /> should pass down a submit handler function to 
//<GifSearch /> as a prop.