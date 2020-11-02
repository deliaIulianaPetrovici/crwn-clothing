import React,{useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import {SingInContainer,
TitleContainer,
ButtonsContainer} from './sign-in.styles';

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';





const SignIn = ({emailSignInStart,googleSignInStart})=>{

    const [userCredentials,setUserCredentials]=useState({email:'',password:''});
    
   
    
    const {email, password}=userCredentials;

    const handleSubmit= async event=>{
        event.preventDefault();
      

        emailSignInStart(email,password);
      /*  try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''})

        }catch(error){
            console.log(error);
            
        } */
        
    }
    const handleChange=event=>{
        const {value, name}=event.target;
        setUserCredentials({...userCredentials, [name]: value});
    };

        return(
            <SingInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                    name='email' 
                    type="email"  
                    handleChange={handleChange} 
                    value={email} 
                    label="email"
                    required
                    />
                   
                  
                   
                    <FormInput 
                    name='password' 
                    type="password" 
                    value={password} 
                    handleChange={handleChange}
                    label="password"
                    required
                    />
                  
                  <ButtonsContainer>
                  <CustomButton type="submit" >Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        
                        Sign in with Google </CustomButton>

                  </ButtonsContainer>
                  
                </form>
            </SingInContainer>
        )
    }


const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);