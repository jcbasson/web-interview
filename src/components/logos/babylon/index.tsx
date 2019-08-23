import * as React from 'react';
import styled from 'styled-components';
import logo from './resources/logo.png';

interface IBabylonLogo {
}
export const BabylonLogo: React.FC<IBabylonLogo> = () => {
    return (<BabylonImg  src={logo} alt="Babylon Health"></BabylonImg>)
};

const BabylonImg = styled.img`
    max-height: 33px;
    margin: 0 auto;
`;