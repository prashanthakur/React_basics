import React,{Component} from "react";

class Covid extends Component{
    constructor(){
        super()

        this.state={
            title:'React app',
            keyword:'User Input Here'
        }
    }


    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({keyword:event.target.value?event.target.value:'User Input Here'})
        this.props.userText(event.target.value)
    }
    render(){
        return(
            <>
            <center>
            <h1 className="mt-5">Covid Prevention {this.state.title}</h1>
            <input onChange={this.handleChange} placeholder="search your product..."/>
            <div style={{color:"green",fontWeight:"bold"}}>{this.state.keyword}</div>
            </center>
            </>
        )
    }
}


export default Covid;