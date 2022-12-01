import React, { Component } from "react";
import axios from 'axios'


export default class PostLists extends Component{
    constructor(){
        super()
        this.state={
            Posts:[],
            errormsg:''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({
            Posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                errormsg:"Error in retrieving data"
            })
        })
    }
    render(){
        const {Posts,errormsg}=this.state
        return(

            <div> 
            Lists of Posts
            {
            Posts.length ?
            Posts.map( post => <div key={post.id}>{post.title}</div>):
            null 
            }
            {
            
               errormsg ? <div>{errormsg}</div>: null  
            }

           </div>
                
        )
    }
}
// export default PostLists



