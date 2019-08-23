import * as React from 'react';
import styled from 'styled-components';

export const Navigation: React.FC = () => {

    return (<NavigationButton>
        <NavigationDividers/>
        <NavigationDividers/>
        <NavigationDividers />
    </NavigationButton>)
};

const NavigationButton = styled.div`
    display: flex;
    flex-direction: column;
    height: 30px;
    width: 30px;
    padding: 5px;
`;

const NavigationDividers = styled.span`
    width: 100%;   
    margin-top: 5px;           
    background-color:#dddddd;
    border-bottom: 1px solid black;
    height: 1px;
`;


