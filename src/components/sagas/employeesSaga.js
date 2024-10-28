import {call,put, takeEvery} from 'redux-saga/effects';
import {FETCH_EMPLOYEES_REQUEST,FETCH_EMPLOYEES_SUCCESS,FETCH_EMPLOYEES_FAILURE, fetchEmployeeSuccess, fetchEmployeeFailure} from '../actions';
import axios from 'axios';

function fetchEmployeesAPI(){
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

function* fetchEmployees(){
    try{
        const response=yield call(fetchEmployeesAPI);
        console.log('in saga ',response.data);
        yield put(fetchEmployeeSuccess(response.data));
    }catch (error){
        yield put(fetchEmployeeFailure(error.message));
    }    
}

export function* watchEmployeesData(){
    yield takeEvery(FETCH_EMPLOYEES_REQUEST,fetchEmployees)
}