import React from 'react';

class ImageCard extends React.Component {

    constructor(props){
        super(props)
        this.imgRef = React.createRef()
        this.state = {spans : 0}
    }

    componentDidMount(){
       this.imgRef.current.addEventListener('load',this.setSpans)
    }

    setSpans = ()=>{
        const Height = this.imgRef.current.clientHeight
        const spans = Math.ceil(Height / 10)
        this.setState({spans})
    }

    render(){
        const {descreption, urls} = this.props.image
        console.log(this.state.spans)
        return(
            <div style={{gridRowEnd : `span ${this.state.spans}`}}>
                <img ref={this.imgRef} src={urls.regular}
                alt={descreption}/>
            </div>
        )
    }

}

export default ImageCard