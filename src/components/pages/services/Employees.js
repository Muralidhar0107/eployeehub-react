import React,{ useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { fetchEmployeesRequest } from '../../actions';
import  '../../../styles/employees.css'

function Employees() {

    const dispatch=useDispatch();
    const {employees,loading,error}=useSelector(state=>state.employees);
    console.log('loading:', loading, 'employees:', employees, 'error:', error);
    console.log('employee details ', employees);
    useEffect(()=>{
        if (employees.length===0)
            dispatch(fetchEmployeesRequest()); 
    },[dispatch,employees]);


    return (
        <div>
            <h2>Employees</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && employees?.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.company.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Employees ;