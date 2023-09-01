import { USER_SIGNUP_FALIURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "./actionType"

export const SignupRequestAction = ()=>{
    return{
        type: USER_SIGNUP_REQUEST
    }
}

export const SignupSuccessAction =(payload)=>{
    return{
        type : USER_SIGNUP_SUCCESS,
        payload
    }
}

export const SignupFailureAction =()=>{
    return{
        type : USER_SIGNUP_FALIURE
    }
}


export const LoginRequestAction = ()=>{
    return{
        type: USER_SIGNUP_REQUEST
    }
}

export const LoginSuccessAction =(payload)=>{
    return{
        type : USER_SIGNUP_SUCCESS,
        payload
    }
}

export const LoginFailureAction =()=>{
    return{
        type : USER_SIGNUP_FALIURE
    }
}