import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import employeeServices from "../services/employeeServices"



const Employee = () => {

    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
            refreshTable();
        }
    )

    const refreshTable = () =>{
        employeeServices.getEmployees() //promise
            .then(
                response => {
                    setEmployees(response.data)
                }            
            )
            .catch(
                error => {
                    console.log("pasensya ka na godbless :>")
                }
            )
    }

    const deleteEmployee = (employeeId) =>{
        let confirm = window.confirm("Papakawalan mo na ba talaga?");
        if(confirm){
            employeeServices.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("Successfully deleted!!")
                refreshTable();
            }
        )
        .catch(
            error =>{
                console.error("Oops, Mali ka ata ng ginawa", error)
            }
        )
        }       
    }

    return(
        <div className="container">
            <h3>List of Employees</h3>
            <div>
                <table className="table table-hover table-light table-striped">
                    <thead>
                       <tr className="table-info">
                        <td>Name</td>
                        <td>Location</td>
                        <td>Department</td>
                        <td>Action</td>
                    </tr> 
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee => (
                                  <tr key={employee.employeeId}>
                                    <td>{employee.main}</td>
                                    <td>{employee.location}</td>
                                    <td>{employee.department}</td>
                                    <td>
                                        <div className="d-grid gap-2 d-flex justify-content-center">
                                            <Link className="btn btn-outline-primary" to={`/edit/${employee.employeeId}`}>Update</Link>
                                            <button className="btn btn-outline-danger" onClick={() => deleteEmployee(employee.employeeId)}>Delete</button>
                                        </div>
                                        
                                    </td>
                                  </tr>  
                            )
                        )
                    }
                    </tbody>                   
                   
                </table>
            </div>
        </div>
    )
}

export default Employee