import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FormPage from "./pages/formLogin/index";
import portal from "./pages/Portal/index";
import catalogo from './pages/catalogo/index';
import tabela from './pages/tabela/index'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/form" exact component={FormPage}/>
            <Route path="/" exact component={portal}/>
            <Route path="/catalogo" exact component={catalogo}/>
            <Route path="/tabela" exact component={tabela}/>
        </BrowserRouter>
    );
}