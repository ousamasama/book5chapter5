import React, { Component } from 'react'
import Brendan from "./FireEmployee.jpeg"

class EmployeeList extends Component {
    render() {
        return (
            <section className="employees list">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={Brendan} className="icon--brendan" />
                                {employee.name}
                                <a href="#"
                                    onClick={() => this.props.fireEmployee(employee.id)}
                                    className="card-link">Fire Employees</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList