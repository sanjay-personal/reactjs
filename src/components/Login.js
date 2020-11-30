import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: '',
            Password: '',


        }
    }

    // componentDidMount() {
    //     axios.get('http://dummy.restapiexample.com/api/v1/employee/' + this.props.match.params.id).then(resp => {
    //         console.log("AXIOSss", resp)
    //         this.setState({ Id: resp.data.data.id, Name: resp.data.data.employee_name, Age: resp.data.data.employee_age, Salary: resp.data.data.employee_salary })
    //     })
    //         .catch(error => {
    //             console.log("erooorrrr", error)
    //         })
    // }

    changeEmployeeData=(e)=>{
        this.setState({ [e.target.name]: e.target.value })

    }
    Login = (props)=>{
        console.log("this.state.Name",this.state)

        if(this.state.Name === 'vijaya') {
        } else {
            alert("Invalid username and password plz enter vijaya for both username nd password")
        }
    }

    render() {
        const { Name, Password} = this.state

        return (
            <div>
                <h2>Login Employee</h2>

                <p>
                    <label>Employee Name : <input type="text" name="Name"
                        value={Name} onChange={this.changeEmployeeData}></input></label>
                </p>
                <p>
                    <label>Employee Password : <input type="text" name="Password"
                        value={Password} onChange={this.changeEmployeeData}></input></label>
                </p>

                <button onClick={this.Login}>Login</button>
            </div>
        )
    }
}

export default Login
