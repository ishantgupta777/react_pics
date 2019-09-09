import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {

    state = {term : ''}

    submitForm = (e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render(){
        return ( 
            <div className="SearchBar">
                <form action="" onSubmit={this.submitForm}>
                    <input type="text" onChange={e => this.setState({term:e.target.value})} value={this.state.term}/>
                    <button type="submit">Search</button>
                    <br/>
                    <label htmlFor="">enter text to search for images</label>
                </form>
            </div>
        )
    }
}

export default SearchBar