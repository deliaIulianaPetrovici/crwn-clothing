import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import {SignUpContainer, TitleContainer} from './sign-up.styles';
import {signUpStart} from '../../redux/user/user.actions';

const SignUp=({signUpStart})=>{
    const [userCredentials,setUserCredentials]=useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword: ''
    });
   
    
    const {displayName, email, password,confirmPassword }=userCredentials;

    const handleSubmit=async event=>{
        event.preventDefault();
        
     
        
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }
        signUpStart(displayName, email, password);
        
      /*  try{
            const {user}= await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});

            this.setState=({
                displayName:'',
                email:'',
                password:'',
                confirmPassword: ''
            });
        }catch(error){
            console.error(error);
        }*/
    }

    const handleChange=event=>{
        const {name, value}= event.target;
        setUserCredentials({...userCredentials, [name]:value});

    }

   
        
        return(
            <SignUpContainer>
                <TitleContainer>I do not have a account</TitleContainer>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                    type='text' 
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required>
                    </FormInput>

                    <FormInput
                    type='email' 
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required>
                    </FormInput>

                    <FormInput
                    type='password' 
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required>
                    </FormInput>

                    <FormInput

                    type='password' 
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required>
                    </FormInput>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>

            </SignUpContainer>
        )
    }


const mapDispatchToProps=dispatch=>({
    signUpStart:(displayName, email, password)=>dispatch(signUpStart({displayName, email, password}))
   
})

export default connect(null,mapDispatchToProps)(SignUp);