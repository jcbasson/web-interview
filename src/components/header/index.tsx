import * as React from 'react';
import styled from 'styled-components';
import { BabylonLogo } from '../logos';
import { Navigation } from '../navigation';


export const Header: React.FC = () => {

    return (<div>
        <HeaderContainer>
            <Navigation></Navigation>
            <BabylonLogo></BabylonLogo>    
        </HeaderContainer>
    </div>)
};

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    padding-top: 20px;
`;
