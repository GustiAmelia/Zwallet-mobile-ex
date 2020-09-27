import * as actions from '../actions/actionTypes';

const initialState = {
	isLoggedIn:false,
	isPending:false,
	isFulfilled: false,
  isRejected: false,
  data :null,
  register:false,
};

const authReducers = (state = initialState,action) => {
  switch (action.type){
		case actions.fetchLogin + actions.pending:
      return {
      ...state,
      isPending:true,
      };
		case actions.fetchLogin + actions.rejected:
      return {
      ...state,
      isRejected:true,
      isPending:false,
      data: action.payload,
      };
		case actions.fetchLogin + actions.fulfilled:
      let login = null;
      if (action.payload.data.isSuccess){
        login = true;
      } else {
        login = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data: action.payload.data.results,
        isRejected: false,
        isLoggedIn: login,
        register:false,
      };
    case actions.isRegistered + actions.pending:
      return {
        ...state,
        isPending:true,
      };
    case actions.isRegistered + actions.rejected:
      return {
        ...state,
        isRejected:true,
        isPending:false,
        data: action.payload,
      };
    case actions.isRegistered + actions.fulfilled:
      let signup = null;
      if (action.payload.data.isSuccess){
        signup = true;
      } else {
        signup = false;
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        data:action.payload.data.results,
        isRejected: false,
        isLoggedIn: false,
        register:signup,
      };
    case actions.isLoggedOut:
      return {
        ...state,
        data: null,
        isLoggedIn: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
        register:false,
      };
    default:
      return state;
   }
};

export default authReducers;