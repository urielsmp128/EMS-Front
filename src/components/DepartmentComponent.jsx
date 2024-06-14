import React, { useEffect, useState } from 'react'
import { createDepartment, getDepartmentById, updateDepartment} from '../services/Department';
import { useNavigate, useParams } from 'react-router-dom';

export const DepartmentComponent = () => {

    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDepartmentDescription] = useState('');

    const {id} = useParams();
    const navigator = useNavigate();

    useEffect(() => {
      getDepartmentById(id).then((response) => {
        setDepartmentName(response.data.departmentName);
        setDepartmentDescription(response.data.departmentDescription);
      }).catch(error => {
        console.error(error);
      })
    }, [id])

    function saveOrUpdateDepartment(e){
        e.preventDefault();
        const department = {departmentName, departmentDescription}

        if(id){
          updateDepartment(id, department).then((response) =>{
            console.log(response.data);
            navigator('/departments');
          }).catch(error => {
            console.error(error);
          })
        }else{
          createDepartment(department).then((response) => {
            console.log(response.data)
            navigator('/departments')
          }).catch(error => {
            console.error(error);
          })
        }

    }

    function pageTitle(){
      if(id){
        return <h2 className='text-center'>Update Department</h2>
      }else{
        return <h2 className='text-center'>Add Department</h2>
      }
    }

  return (
    <div className='container'>
    <br></br>
    <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Department Name:</label>
                <input
                  type='text'
                  placeholder='Enter Department Name'
                  name='departmentName'
                  className='form-control'
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}>
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Department Description:</label>
                <input
                  type='text'
                  placeholder='Enter Department Description'
                  name='lastName'
                  className='form-control'
                  value={departmentDescription}
                  onChange={(e) => setDepartmentDescription(e.target.value)}>
                </input>
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateDepartment}>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
