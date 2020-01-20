import React from 'react';
import './styles.css'
import {MDBContainer} from 'mdbreact';
import Header from "../../Components/Header/index"
import Menu from "../../Components/menu/index"

const portal = () => {
    return (
        <MDBContainer>

            <Header/>
            <div>
                <p className="tittle-portal">Cataclysmic Variables Portal</p>
            </div>
            <Menu className="" />
            
        </MDBContainer>
    );
}

export default portal;