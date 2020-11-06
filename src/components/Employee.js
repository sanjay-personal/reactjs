import React, { Component } from 'react'
import axios from 'axios'


class Employee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: []
        }
    }

    componentDidMount() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees').then(resp => {
            console.log("AXIOS", resp)
            this.setState({ post: resp.data.data })
        })
            .catch(error => {
                console.log("erooorrrr", error)
            })
    }

    render() {
        const { post } = this.state
        return (
            <div>
                <h2>Employee List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Employee Name</th>
                            <th>Employee Age</th>
                            <th>Employee Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            post.map(emp =>
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td> {emp.employee_name} </td>

                                    <td> {emp.employee_age} </td>
                                    <td> {emp.employee_salary} </td>
                                    <a href={'/edit/' + emp.id}>Edit</a>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Employee
