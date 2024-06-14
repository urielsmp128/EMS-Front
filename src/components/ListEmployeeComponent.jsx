import React, {useState, useEffect} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            console.log(response.data)
            setEmployees(response.data)
        }).catch(error => {
            console.error(error)
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        deleteEmployee(id).then((response) => {
            console.log(response.data)
            getAllEmployees();
        }).catch(error => {
            console.error(error)
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center mb-3'>List of employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}>Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
        <div className='text-center'>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        </div>
    </div>
  )
}

export default ListEmployeeComponent;
