import styled from 'styled-components';
import * as colors from '../../config/colors';


export const Nav = styled.nav`
 background: ${colors.primaryColor};
    padding: 10px;
    display: flex;
    align-items: center;

    div {
        display: flex;
        width: 100%;
        align-items: center;
    }

    .home-search {
        color: #fff;
    }

    a {
        color: #fff;
        margin: 0 10px;
    }

    a:hover {
      text-decoration: underline;
    }


    .user-close {
        justify-content: end;
    }

    .logado {
        justify-content: right;
        text-align: center;
        font-size: 1.8rem;
        gap: 2rem;
    }

    .logout{
        color: #fff;
        cursor: pointer;
    }

`;