const { USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FALIURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FALIURE } = require("./actionType")

const initialState={
    isAuth: false,
    token: "",
    isLoading: false,
    isError: false,
    add:{},
}



export const reducer = (state=initialState, {type,payload})=>{
    
    switch(type){
        case USER_SIGNUP_REQUEST: 
        return {...state, isLoading:true}

        case USER_SIGNUP_SUCCESS:
            return {...state, isLoading:false, isAuth:true, add:payload }

        case USER_SIGNUP_FALIURE :
            return {...state, isError:true,}    


            //Login---------------
        case USER_LOGIN_REQUEST:
            return {...state , isLoading:true, isAuth:false}
            
        case USER_LOGIN_SUCCESS:
            return {...state, isLoading:false, isAuth:true, token:payload}
           
        case USER_LOGIN_FALIURE:
            return {...state, isAuth:false, isError:true}
        default: 
        return state
    }
}