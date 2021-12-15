import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import employeeServices from "../services/employeeServices";

const AddEmployee = () => {

    const [main, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {employeeId} = useParams();
   
    const saveEmployee = (e) =>{
        e.preventDefault();

        if(employeeId){
            const employee = {employeeId, main, location, department};
            employeeServices.putEmployee(employee) //promise
            .then(
                response =>{
                    console.log("Added New Employee :>", response.data)
                    navigate("/employees")
                }
            )
            .catch(
                error =>{
                    console.error("Oops, Something Went Wrong huhuhuhu wawa ka naman")
                }
            )
        }
    
        else{
          const employee = {main, location, department};
        employeeServices.postEmployee(employee) //promise
        .then(
            response =>{
                console.log("Added New Employee :>", response.data)
                navigate("/employees")
            }
        )
        .catch(
            error =>{
                console.error("Oops, Something Went Wrong huhuhuhu wawa ka naman")
            }
        )
    } 
}
    
useEffect(
    () =>{
        if(employeeId){
            employeeServices.getEmployee(employeeId)
            .then(
                response =>{
                    setName(response.data.main);
                    setLocation(response.data.location);
                    setDepartment(response.data.department);
                }
            )
            .catch(
                error =>{
                    console.error("Error!!!")
                }
            )
        }
    },[employeeId])


    return (
        <div className="container">
            <h3>Add Employee</h3>
            <form>
                <div className="mb-3">
                    <label for="main" className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="main"
                    placeholder="Add Employee Name" 
                    onChange={
                        (e) =>{
                            setName(e.target.value)
                        }
                    }
                    />                       
                </div>
                <div className="mb-3">
                    <label for="location" className="form-label">Location</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="location"
                    placeholder="Add Employee Location"
                    onChange={
                        (e) =>{
                            setLocation(e.target.value)
                        }
                    } 
                    />                       
                </div>
                <div className="mb-3">
                    <label for="department" className="form-label">Department</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="department"
                    placeholder="Add Employee Department" 
                    onChange={
                        (e) =>{
                            setDepartment(e.target.value)
                        }
                    }
                    />                       
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
            </form>
        </div>
    )
}

export default AddEmployee