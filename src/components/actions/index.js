export const FETCH_EMPLOYEES_REQUEST='FETCH_EMPLOYEES_REQUEST';
export const FETCH_EMPLOYEES_SUCCESS='FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE='FETCH_EMPLOYEES_FAILURE';


export const fetchEmployeesRequest= ()=> ({
 type: FETCH_EMPLOYEES_REQUEST
});

export const fetchEmployeeSuccess= (employees)=> ({
    type: FETCH_EMPLOYEES_SUCCESS,
    employees: employees
});

export const fetchEmployeeFailure= (error)=> ({
    type: FETCH_EMPLOYEES_FAILURE,
    payload: error
});