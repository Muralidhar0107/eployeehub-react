import {FETCH_EMPLOYEES_REQUEST,FETCH_EMPLOYEES_SUCCESS,FETCH_EMPLOYEES_FAILURE} from '../actions';


const initialState= {

    loading: false,
    employees: [],
    error: ''
}

export const employeesReducer= (state=initialState,action)=>{
    console.log('reducer ',action);
    switch(action.type){
        case FETCH_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_EMPLOYEES_SUCCESS:
            return{
                loading:false,
                employees: action.employees,
                error:''
            };
        case FETCH_EMPLOYEES_FAILURE:
            return{
                loading: false,
                employees:[],
                error: action.error
            };
        default:
            return state;
    }

}