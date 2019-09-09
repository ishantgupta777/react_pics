import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import './ImageList.css'

class App extends React.Component{

    state = { images : [] }

    onFormSubmit = async (term)=>{
        const response = await unsplash.get('/search/photos',{
            params : {
                query : term
            },
            
        })
        this.setState({images : response.data.results})
    }
    render(){
        return(
            <div>
                < SearchBar onSubmit={this.onFormSubmit} />
                <div className="image-list">
                < ImageList  images={this.state.images}/>
                </div>
            </div>
        )
    }
}

export default App