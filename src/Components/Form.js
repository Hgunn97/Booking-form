import React from 'react'

class Form extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div>
                        <label>Enter Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label>Enter Email</label>
                        <input type="text" className="form-contorl" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Form