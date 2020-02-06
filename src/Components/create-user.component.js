import React from 'react'
import axios from 'axios'

class CreateUser extends React.Component{
    constructor(props){
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this)
        this.onChangeEmail = this.onChangeUserName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state ={
            name: '',
            email: ''
        }
    }

    onChangeUserName(e){
        this.setState({name: e.target.value})
    }

    onChangeEmail(e){
        this.setState({email: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const userObject = {
            name: this.state.name,
            email: this.state.email
        };

        axios.post('/create', userObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

        this.setState({name: '', email: ''})
    }

    render(){
        return(
           <div className="wrapper" style={{paddingTop: "25px"}}>
               <form>
                   <div className="form-group">
                       <label>Enter Name</label>
                       <input type='text' className="form-control" />
                   </div>
                   <div className="form-group">
                       <label>Enter Email</label>
                       <input type='text' className="form-control" />
                   </div>
                   <div className="form-group">
                       <input type='submit' value="Create User" className="btn btn-success btn-block" />
                   </div>
               </form>
           </div>
        )
    }
}
export default CreateUser