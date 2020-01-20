import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './style.css'
import Header from '../../Components/Header/index'

const FormPage = () => {
  return (

    
    <MDBContainer className="">
      
      <Header/>

      <MDBRow className="justify-content-center py-5 ">
        <MDBCol md="4">
          
          <form>
            <p className="h4 text-center mb-1">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn color="#42a5f5 blue lighten-1">Login</MDBBtn>

              <MDBBtn color="#42a5f5 blue lighten-1">Sign Up</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;

