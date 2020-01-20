import React from 'react';
import { MDBDataTable, MDBContainer } from 'mdbreact';
import Header from "../../Components/Header/index"
import Menu from "../../Components/menu/index"
import "./styles.css"

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name_RK',
        field: 'Name_RK',
        sort: 'asc',
        width: 100
      },
      {
        label: 'RAJ2000_RK',
        field: 'RAJ2000_RK',
        sort: 'asc',
        width: 100
      },
      {
        label: 'DEJ2000_RK',
        field: 'DEJ2000_RK',
        sort: 'asc',
        width: 100
      }
      
    ],
    rows: [
        {
            "Name_RK": "V1017 Sgr",
            "RAJ2000_RK": "18 32 04.5",
            "DEJ2000_RK": "-29 23 12",
        },
        {
            "Name_RK": "MR Vel",
            "RAJ2000_RK": "09 25 45.9",
            "DEJ2000_RK": "-47 58 18"
        },
        {
            "Name_RK": "V630 Cas",
            "RAJ2000_RK": "23 48 51.9",
            "DEJ2000_RK": "+51 27 39"
        }
      
    ]
  };

  return (
    
    <MDBContainer>

        <Header/>

        <div className="menu-lateral">
            <Menu/>
        </div>

        <div className="tabela-principal">
            <MDBDataTable
                style={{width:'55rem'}}
                striped
                bordered
                data={data}
            />
        </div>

    </MDBContainer>
  );
}

export default DatatablePage;