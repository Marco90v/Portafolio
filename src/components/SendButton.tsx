// interface usadas en este componente
interface state {
	result: string;
	type: string;
	icon: ImageMetadata | null;
}
interface formContact {
	fullName: FormDataEntryValue | null;
	email: FormDataEntryValue | null;
	subject: FormDataEntryValue | null;
	message: FormDataEntryValue | null;
}

// Importaciones
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import check from '../assets/icons/circle-check.svg';
import error from '../assets/icons/exclamation-circle.svg';

// Constantes
const SERVICE_ID = import.meta.env.PUBLIC_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;
const msgAlertSuccess:state = {result:"Message sent successfully.", type:"success", icon:check};
const msgAlertError:state = {result:"The message could not be sent, please try again.", type:"error", icon:error};
const msgAlertErrorFields:state = {result:"Please check all fields.", type:"error", icon:error};
const initicalState:state = {
	result: "",
	type: "",
	icon: null
};

// validacion de email
const validarEmail = (email:string):boolean => {
	var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	return regex.test(email)
}

// validacion de campos
const validateFields = (formContact:formContact):boolean => {
	let validated:boolean = true
	Object.entries(formContact).forEach(([key, value]) => {
		if(key === "email" && !validarEmail(value)) validated=false
		if(value.length === 0) validated=false
	})
	return validated
}

// Componente de alerta
const Alert = ({ type, result, src }:{type:string, result:string, src:string | undefined}) => {
	if(!src) return null;
	return (
		<div className={`flex flex-row rounded-md p-2 text-white gap-2 col-span-2 ${ type === "success" ? "bg-green-500" : "bg-red-500"}`}>
			<img src={src} alt={type} />
			{result}
		</div>
	);
};

// Componente de envío de mensaje
const SendButton = () => {
	const [state, setState] = useState<state>(initicalState);
	const [disabled, setDisabled] = useState<boolean>(false);

	// reseteo de formulario (no funciona como se espera)
	const resetFrom = (dataForm:FormData) => {
		dataForm.delete("name");
		dataForm.delete("email");
		dataForm.delete("subject");
		dataForm.delete("message");
	};

	// actualizacion de estado
	const updateState = (state:state, dataForm:FormData) => {
		setState(e=>({...e, ...state}));
		setDisabled(e=>!e);
		resetFrom(dataForm)
		setTimeout(()=>{
			setState(e=>({...e, ...initicalState}));
		}, 6000);
	};

	// envio de mensaje
	const sendEmail = async (event:React.SyntheticEvent) => {
		event.preventDefault();
		const form = document.querySelector("form");
		const dataForm = new FormData(form as HTMLFormElement | undefined);
		const formContact = {
			fullName: dataForm.get("name"),
			email: dataForm.get("email"),
			subject: dataForm.get("subject"),
			message: dataForm.get("message"),
		};

		if( validateFields(formContact) ){
			setDisabled(e=>!e);
			emailjs.send(SERVICE_ID, TEMPLATE_ID, formContact, PUBLIC_KEY).then(()=>{
				updateState(msgAlertSuccess,dataForm);
			}).catch(()=>{
				updateState(msgAlertError,dataForm);
			});      
		}else{
			setDisabled(e=>!e);
			updateState(msgAlertErrorFields,dataForm);
		}

	};

	return (
	<>
		<button
			type="submit"
			className="p-2 col-span-2 md:col-span-1 md:col-start-2 w-full md:w-60 text-orange-500 text-base font-bold bg-zinc-700 rounded-md ml-auto hover:bg-orange-500 hover:text-zinc-700 transition-colors duration-300 disabled:bg-slate-950 disabled:text-zinc-700"
			onClick={sendEmail}
			disabled={disabled}
		>
			Send message
		</button>
		<Alert type={state.type} result={state.result} src={state.icon?.src} />
	</>
	);

};

export default SendButton;