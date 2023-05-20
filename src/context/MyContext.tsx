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
    modal: initialModal,
    showSidebar:false,
    projectsData: [],
    challengesData: [],
};



const Context = createContext<{state:stateContact, dispatch: React.Dispatch<any>}>({state:initialState, dispatch:()=>null });

const reducer = (state:stateContact, action:any):stateContact => {
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
        case "toggleSidebar":
            return {
                ...state,
                showSidebar: !state.showSidebar
            };
        case "setProjects":
            return{
                ...state,
                projectsData: action.data
            };
        case "setChallenges":
            return{
                ...state,
                challengesData: action.data
            };
        default:
            return state;
    }
};

function MyContext({children}:{children:React.ReactNode}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
}
export default MyContext;
export { MyContext, Context };