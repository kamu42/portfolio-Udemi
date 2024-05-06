import React, {useState, useRef} from 'react'
import * as S from "./Contact.styles"
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [contactDates, setContactDates] = useState({
        name:"",
        email:"",
        message:"",
        checkedTerms: false,
    });
    const [emptyInputs, setEmptyInputs] = useState(false);
    const [succesSendForm, setSuccesSendForm ] = useState(false)
    const [errorSendForm, setErrorSendForm] = useState(false)
    
    const form = useRef();

    const onSubmit =(e)=>{
        //prevent page refresh
        e.preventDefault();

        //validate form
        if(contactDates.name === "" || contactDates.email === "" || contactDates.message === ""|| contactDates.checkedTerms === false){
           setEmptyInputs(true);
        } else{
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID 
            ).then((result)=>{
                setSuccesSendForm(true);
            },
        (error)=>{
            setErrorSendForm(true);
        }
        );
        }


        //send form
    }

    return ( 
  <S.ContainerContact>
        <S.Title>Contact whit me: </S.Title>
        <S.ContainerForm>
         {succesSendForm ? (
            <S.SuccesMessage>Form send succesfully</S.SuccesMessage>
        ):(
            <S.Form onSubmit={onSubmit} ref={form}>
                <S.InputForm 
                placeholder='Your name' 
                type='text' 
                name='name'
                onChange={(e) => setContactDates ({...contactDates,name: e.target.value})}
                value={contactDates.name}
                />
                <S.InputForm 
                placeholder='Your e-mail' 
                type='email' 
                name='email'
                onChange={(e) => setContactDates ({...contactDates,email: e.target.value})}
                value={contactDates.email}/>
                <S.TextArea 
                placeholder='Write your message' 
                name='message'
                onChange={(e) => setContactDates ({...contactDates,message: e.target.value})}                
                value={contactDates.message}
                /> 
                
                <S.ContainerConditions>
                    <input type='checkbox' onChange={(e)=> setContactDates({...contactDates, checkedTerms: e.target.checked})}/>
                    <span>Accept terms and conditions</span>
                </S.ContainerConditions>
                
                <S.Button type='submit'>Send</S.Button>
            </S.Form>
           
            )}
        </S.ContainerForm>
        {emptyInputs && (
                <p>You should fill all the imputs and accept the terms</p>
        )}
        {errorSendForm && (
                <S.TextError>There was an error, try again later</S.TextError>
        )}
  </S.ContainerContact>
  );
};

export default Contact
