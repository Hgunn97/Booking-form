import React from 'react'
import axios from 'axios'
import DataTable from './data-table';

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userCollection: []
        }
    }
    componentDidMount(){
        axios.get('/users')
        .then(res => {
            this.setState({
                userCollection: res.data
            })
        })
        .catch(function (error){
            console.log(error)
        })
    }

    dataTable(){
        return this.state.userCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />
        })
    }

    render(){
        return(
            <div className="wrapper-users" style={{paddingTop: "25px"}}>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Users