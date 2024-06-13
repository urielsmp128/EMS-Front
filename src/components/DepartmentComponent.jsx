import React, { useState } from 'react'

export const DepartmentComponent = () => {

    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDepartmentDescription] = useState('');

    function saveDepartment(e){
        e.preventDefault();

        const department = {departmentName, departmentDescription}
        console.log(department);
    }

  return (
    <div className='container'>
    <br></br>
    <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Department</h2>
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

              <button className='btn btn-success' onClick={saveDepartment}>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
