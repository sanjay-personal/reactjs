import React, { Component } from 'react'
import axios from 'axios'
class EditEmployee extends Component {
    // 

    constructor(props) {
        super(props)

        this.state = {
            Id: '',
            Name: '',
            Age: '',
            Salary: ''
        }
    }

    componentDidMount() {
        axios.get('http://dummy.restapiexample.com/api/v1/employee/' + this.props.match.params.id).then(resp => {
            console.log("AXIOSss", resp)
            this.setState({ Id: resp.data.data.id, Name: resp.data.data.employee_name, Age: resp.data.data.employee_age, Salary: resp.data.data.employee_salary })
        })
            .catch(error => {
                console.log("erooorrrr", error)
            })
    }

    changeEmployeeData = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    render() {
        const { Id, Name, Age, Salary } = this.state

        return (
            <div>
                <h2>Edit Employee</h2>
                <p>
                    <label>Employee ID : <input type="text" name="Id"
                        value={Id} onChange={this.changeEmployeeData}></input></label>
                </p>
                <p>
                    <label>Employee Name : <input type="text" name="Name"
                        value={Name} onChange={this.changeEmployeeData}></input></label>
                </p>
                <p>
                    <label>Employee Age : <input type="text" name="Age"
                        value={Age} onChange={this.changeEmployeeData}></input></label>
                </p>
                <p>
                    <label>Employee Salary : <input type="text" name="Salary"
                        value={Salary} onChange={this.changeEmployeeData}></input></label>
                </p>
                <button>Update</button>
            </div>
        )
    }
}

export default EditEmployee
