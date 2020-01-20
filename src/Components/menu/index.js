import React from 'react';
import {MDBContainer, MDBListGroup, MDBListGroupItem, MDBCol} from 'mdbreact'
import './styles.css'
import logo from "./logoInpe.png"


const menu = () => {
    return(
        
        <MDBContainer className="">
            <div className="lista">    
                <MDBListGroup className="" style={{ width: "14rem", heigth:'30rem' }}>
                    <MDBListGroupItem href="http://www.inpe.br/acessoainformacao/" hover>Acesso a informação</MDBListGroupItem>
                    <a href="http://www.inpe.br/">
                        <MDBCol className="imagem">
                            <img  src={logo} className="logo-inpe" alt="Logo" />
                        </MDBCol>
                    </a>
                    <MDBListGroupItem href="/form" hover>Login</MDBListGroupItem>
                    <MDBListGroupItem href="/catalogo" hover>Catalogo</MDBListGroupItem>
                </MDBListGroup>
            </div>
        </MDBContainer>
        
    );
}

export default menu;