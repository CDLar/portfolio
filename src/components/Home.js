import React from 'react';
import styled from 'styled-components'
import './Shapes.css'

const Hero = styled.div`
  width: 100%;
  height: calc(100vh + 10px);
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:${props => props.theme.background};
`;

const TextWrapper = styled.div`
display:block;
width:100%;
text-align:center;
`

const Header = styled.h1`
font-family:'raleway';
font-size:3.5rem;
font-weight:400;
@media (max-width: 675px) {
font-size:2rem;
  }
  @media (max-width: 500px) {
font-size:1.5rem;
  }
`

const SubHeader = styled.h1`
font-family:'raleway';
font-size:2.2rem;
font-weight:400;
margin-top:0.3em;
@media (max-width: 675px) {
font-size:1.65rem;
  }
  @media (max-width: 500px) {
font-size:1.2rem;
  }
`

const ColorText = styled.span`
color:${props => props.theme.primary};
`

const SubColorText = styled.span`
color:${props => props.theme.primaryV};
`

const Home = () => {
    return (
        <Hero>
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
            <TextWrapper>
                <Header>Hello, I'm <ColorText>Curtis Larsen.</ColorText></Header>
                <SubHeader>I'm a <SubColorText>front-end</SubColorText> developer from <SubColorText>Ottawa.</SubColorText></SubHeader>
            </TextWrapper>
        </Hero>
    );
}

export default Home;