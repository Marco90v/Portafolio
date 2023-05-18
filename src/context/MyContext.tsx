import { createContext, useReducer } from "react";

const initialForm:formContact = {
  fullName:"",
  email:"",
  subject:"",
  message:"",
};

const initialAlert:alertContact = {
  result: "",
  type: "",
  icon: "",
};

const initialModal: null | project | challenge = null;

const initialState:stateContact = {
  formContact: initialForm,
  alert: initialAlert,
  modal: initialModal
};

const Context = createContext<any>(initialState);

const reducer = (state:any, action:any) => {
  switch (action.type) {
    case "addDataModal":
      return {
        ...state,
        modal: action.data,
      };    
      case "resetModal":
        return {
          ...state,
          modal: null,
        };
      case "setValueForm":
        return{
          ...state,
          formContact:{
            ...state.formContact,
            ...action.data,
          }
        };
      case "resetForm":
        return{
          ...state,
          formContact: initialForm,
        };
      case "changeAlert":
        return{
          ...state,
          alert: action.msgAlert,
        };
      case "resetAlert":
        return{
          ...state,
          alert:initialAlert,
        };
    default:
      break;
  }
};

function MyContext({children}:any) {
  const [state, dispatch] = useReducer(reducer, initialState);

    return(
      <Context.Provider value={{state, dispatch}}>
        {children}
      </Context.Provider>
    );
}
export default MyContext;
export { MyContext, Context };