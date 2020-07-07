import React from 'react';
import styled from 'styled-components'
import './Home.css'

const Main = styled.div`
  width: 100%;
  height: calc(100vh + 10px);
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom:1px solid;
  border-color: ${props => props.theme.medium};
`;

const TextWrapper = styled.div`
display:block;
width:100%;
text-align:center;
`

const Header = styled.h1`
font-family:'raleway';
font-size:3rem;
font-weight:400;
`

const ColorText = styled.span`
color:${props => props.theme.primary};
`
const Home = () => {
    return (
        <>
            <Main>
                <TextWrapper>
                    <Header>Hello, I'm <ColorText>Curtis Larsen.</ColorText></Header>
                    <Header>I'm a front-end developer.</Header>
                </TextWrapper>
            </Main>
            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </>

    );
}

export default Home;