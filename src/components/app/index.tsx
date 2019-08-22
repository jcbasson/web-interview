import * as React from 'react';
import styled from 'styled-components';

export const App: React.FC = () => {

    return (<Layout>
        <LayoutItem></LayoutItem>
            <LayoutDivider/>
        <LayoutItem></LayoutItem>
            <LayoutDivider/>
        <LayoutItem></LayoutItem>
            <LayoutDivider/>
        <LayoutItem></LayoutItem>
        </Layout>)
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`;

const LayoutItem = styled.div`
    width: 100%;
`;

const LayoutDivider = styled.hr`
    border: 0;
    clear:both;
    display:block;
    width: 100%;              
    background-color:#dddddd;;
    height: 1px;
`;




