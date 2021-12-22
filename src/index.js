import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Footer from './Footer';
import Anycomp from './components/Anycomp';
import Header from './Header';
import Navbar from './Navbar';
import Covid from './Covid';
import JSON from './db.json';
import ProductDisplay from './ProductDisplay';
import Sastaindex from './components/Sastaindex';

class App extends Component{
    constructor(props){
        super(props)

        this.state={
            product:JSON,
            filtered:JSON
        }
    }

    filterProduct = (keyword) =>{
        var output= this.state.product.filter((data)=>{
            return data.name.toLowerCase().indexOf(keyword.toLowerCase())> -1
        })

        this.setState({filtered:output})
    }

    render(){
        return(
            <>
            <Navbar mode="dark"/>
            <Header heading="TextApp"/>
            <div className="container">
            <h1>hi from React</h1>
            <Anycomp/>
            <h2>hello</h2>
            <button type="button" className="btn btn-success">Click</button>
            </div>
            <Footer title="Any title of prop goes heer" month="October"/>
            <Covid userText={(data)=>{this.filterProduct(data)}}/>
            <ProductDisplay prodData={this.state.filtered}/>
            <Sastaindex />
            </>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))