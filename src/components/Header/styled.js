import styled from 'styled-components';
import * as colors from '../../config/colors';


export const Nav = styled.nav`
 background: ${colors.primaryColor};
    padding: 10px;
    display: flex;
    align-items: center;

    .home-search {
        display: flex;
        color: #fff;
        width: 100%;
        display: flex;
        align-items: center;

      a {
        color: #fff;
        margin: 0 10px;
    }
    }


    .user-close {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;

      a {
        color: #fff;
        margin: 0 10px;
    }

    }

`;