import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoutes';
import Login from '../pages/Login';
import Produtos from '../pages/Produtos';
import Produto from '../pages/Produto';
import Page404 from '../pages/Page404';
import Register from '../pages/Register';
import Home from '../pages/Home'


export default function Routes() {
    return(
            <Switch>
                <MyRoute exact path="/" isClosed={false} component={Login}/>
                <MyRoute exact path="/register" isClosed={false} component={Register}/>
                <MyRoute exact path="/produtos" isClosed component={Produtos}/>
                <MyRoute exact path="/home" isClosed component={Home}/>
                <MyRoute exact path="/produto/:id/edit" isClosed component={Produto}/>
                <MyRoute exact path="/produto" isClosed component={Produto}/>
                <MyRoute path="*" component={Page404}/>
            </Switch>
    );
};