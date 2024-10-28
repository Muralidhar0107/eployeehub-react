import {all} from 'redux-saga/effects';
import {watchEmployeesData} from './employeesSaga';

export default function* rootSaga(){
     yield all([
        watchEmployeesData()
     ]);
}