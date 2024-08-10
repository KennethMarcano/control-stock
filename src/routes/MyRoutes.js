import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


export default function MyRoute({ component: Component, isClosed = false, ...rest }) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if(isClosed && !isLoggedIn) {
        return(
            <Redirect
                to={{ pathname: '/', state: { prevPath: rest.location.pathname } }}
            />
        )
    }

    return <Route {...rest} component={Component}/>;
};

MyRoute.prototype = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
};