import React from 'react'

const GifList = props => {
    console.log(props)
    return(
        <div>
           {props.allgifs.map(gif => <img key={gif.url} src={gif.url} alt="n/a" />)}
        </div>
    )
}

export default GifList

//<GifList />
//<GifList /> is a presentational component. It receives data from its props 
//and renders html given the input data. 
//It can render a top level <ul> with each gif as an <li>