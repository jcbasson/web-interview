import * as React from 'react';
import styled from 'styled-components';
import { Header } from '../header';

export const App: React.FC = () => {

    return (<Layout>
        <LayoutItem>
            <Header />
        </LayoutItem>
        <LayoutDivider/>
        <LayoutItem>
            <SubHeader>New appointment</SubHeader>
        </LayoutItem>
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
    padding-left: 5px;
    padding-right: 5px;
`;

const LayoutDivider = styled.hr`
    border: 0;
    clear:both;
    display:block;
    width: 100%;              
    background-color:#dddddd;;
    height: 1px;
`;

const SubHeader = styled.h2`
    font-size: 24px;
`;




