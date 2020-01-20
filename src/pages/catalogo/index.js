import React from 'react';
import './styles.css'
import Header from'../../Components/Header/index'
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';
import Menu from '../../Components/menu/index'

const BasicTable = () => {
  return (

    <MDBContainer>
    
        <Header/>
        
            <div className="menu">
                <Menu/>
            </div>
            
            <div className ="tabela">
            <MDBTable responsive className="" striped bordered style={{width:'40rem'}}>
            
                <MDBTableHead className="justify-content-center">
                    <tr>
                    <th>#</th>
                    <th>Fidado</th>
                    <th>Lasti</th>
                    <th>Handle</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
            </div>
        
    </MDBContainer>
  );
}

export default BasicTable;
