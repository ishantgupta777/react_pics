import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component{

    onFormSubmit(term){
        console.log(term)
    }
    render(){
        return(
            <div>
                < SearchBar onSubmit={this.onFormSubmit} />
            </div>
        )
    }
}

export default App