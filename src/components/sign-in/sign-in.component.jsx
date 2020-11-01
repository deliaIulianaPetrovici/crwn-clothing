import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import {SingInContainer,
TitleContainer,
ButtonsContainer} from './sign-in.styles';

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';





class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();
        const {emailSignInStart}=this.props;
        const {email, password}=this.state;

        emailSignInStart(email,password);
      /*  try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''})

        }catch(error){
            console.log(error);
            
        } */
        
    }
    handleChange=event=>{
        const {value, name}=event.target;
        this.setState({[name]: value});
    }

    render(){
        const {googleSignInStart} =this.props;
        return(
            <SingInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type="email"  
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label="email"
                    required
                    />
                   
                  
                   
                    <FormInput 
                    name='password' 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
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
}

const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);