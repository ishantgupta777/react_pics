import React from 'react';

class SearchBar extends React.Component {

    state = {term : 'Hello'}

    submitForm = (e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render(){
        return ( 
            <div>
                <form action="" onSubmit={this.submitForm}>
                    <input type="text" onChange={e => this.setState({term:e.target.value})} value={this.state.term}/>
                    <br/>
                    <br/>
                    <label htmlFor="">enter text</label>
                </form>
            </div>
        )
    }
}

export default SearchBar