import * as React from 'react';
import styled from 'styled-components';
import { Header } from '../header';
import { Appointment } from '../appointment';

export const App: React.FC = () => {

    return (<Layout>
        <LayoutItem>
            <Header />
        </LayoutItem>
        <LayoutDivider/>
        <LayoutItem>
            <Appointment />
        </LayoutItem>
        </Layout>)
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`;

const LayoutItem = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;

const LayoutDivider = styled.hr`
    border: 0;
    clear:both;
    display:block;
    width: 100%;              
    background-color:#dddddd;;
    height: 1px;
`;
